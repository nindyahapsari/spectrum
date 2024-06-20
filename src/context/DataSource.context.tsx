import { useState, createContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios, { AxiosError } from 'axios';
import {
  FetchCheapestFlightsInfo,
  DataSourceContextType,
  City,
  CityCodeName,
  AirlineCodeName,
  Airline,
  CheapestFlight,
} from '../types';

type TDataSourceProvider = {
  children: React.ReactNode;
};

const HEADERS = {
  'x-rapidapi-key': import.meta.env.VITE_X_RAPIDAPI_KEY as string,
  'x-rapidapi-host': import.meta.env.VITE_X_RAPIDAPI_HOST as string,
  'X-Access-Token': import.meta.env.VITE_TRAVELPAYOUTS_TOKEN_API as string,
};

const CHEAPEST_FLIGHT_ENDPOINT = import.meta.env
  .VITE_TRAVELPAYOUTS_CHEAPEST_FLIGHT_URL as string;

const CITIES_ENDPOINT = import.meta.env.VITE_TRAVELPAYOUTS_CITIES_URL as string;

const AIRLINES_ENDPOINT = import.meta.env
  .VITE_TRAVELPAYOUTS_AIRLINES_URL as string;

const DataSourceContext = createContext<DataSourceContextType>({
  allFlights: { departure: '', flights: [] },
  fetchCheapestFlight: async () => {},
  isLoading: false,
  error: null,
  cities: {},
  airlines: {},
  isDataLoaded: false,
  currentPage: 1,
  totalPages: 1,
  setCurrentPage: () => {},
  setTotalPages: () => {},
});

function DataSourceProvider({ children }: TDataSourceProvider) {
  const [allFlights, setAllFlights] = useState<FetchCheapestFlightsInfo>({
    departure: '',
    flights: [],
  });
  const [cities, setCities] = useState<CityCodeName>({});
  const [airlines, setAirlines] = useState<AirlineCodeName>({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  async function fetchCheapestFlight(params: { [key: string]: string }) {
    const options = {
      params: {
        calendar_type: 'departure_date',
        currency: 'EUR',
        page: '1',
        destination: params.destination || '-',
        origin: params.origin,
        return_date: params.return_date || '',
      },
      headers: HEADERS,
    };

    setIsLoading(true);

    try {
      const response = await axios.get(CHEAPEST_FLIGHT_ENDPOINT, options);

      const data = response.data.data;
      const formatedCheapestFlights = formatFlights(data);

      setAllFlights({
        departure: params.departure,
        flights: formatedCheapestFlights,
      });
      setTotalPages(Math.ceil(formatedCheapestFlights.length / 10));
      setCurrentPage(1);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(error);
      } else {
        console.log('error fetch', error);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const cachedCities = localStorage.getItem('cities');
      const cachedAirlines = localStorage.getItem('airlines');

      if (cachedCities && cachedAirlines) {
        setCities(JSON.parse(cachedCities));
        setAirlines(JSON.parse(cachedAirlines));
        setIsDataLoaded(true);
        return;
      }

      try {
        setIsDataLoaded(true);

        const [citiesResponse, airlineResponse] = await Promise.all([
          await axios.get(CITIES_ENDPOINT, { headers: HEADERS }),
          await axios.get(AIRLINES_ENDPOINT, { headers: HEADERS }),
        ]);

        const cityCodeName = citiesResponse.data.reduce(
          (acc: CityCodeName, city: City) => {
            acc[city.code as keyof CityCodeName] = city.name_translations.en;
            return acc;
          },
          {}
        );

        const airlineCodeName = airlineResponse.data.reduce(
          (acc: AirlineCodeName, airline: Airline) => {
            acc[airline.code] = airline.name_translations.en;
            return acc;
          },
          {}
        );

        localStorage.setItem('cities', JSON.stringify(cityCodeName));
        localStorage.setItem('airlines', JSON.stringify(airlineCodeName));

        setCities(cityCodeName);
        setAirlines(airlineCodeName);
        setIsDataLoaded(false);
      } catch (error) {
        console.log('error fetching data', error);
      } finally {
        setIsDataLoaded(false);
      }
    };

    fetchData();
  }, []);

  const translateAirline = (airlineCode: string) => {
    return airlines[airlineCode] || 'N.A';
  };

  const translateCity = (cityCode: string) => {
    return cities[cityCode] || 'N.A';
  };

  const formatFlights = (flights: CheapestFlight) => {
    if (!isDataLoaded) return [];
    return Object.keys(flights).flatMap((key) => {
      const city = translateCity(key);
      return Object.keys(flights[key]).map((flight_id) => {
        const flight = flights[key][flight_id];
        const airline = translateAirline(flight.airline);
        const _id = uuidv4();

        return {
          _id,
          city,
          flight_id,
          airline,
          departure_at: flight.departure_at,
          return_at: flight.return_at,
          price: flight.price,
          flight_number: flight.flight_number.toString(),
          date: flight.expires_at,
          origin: key,
        };
      });
    });
  };

  const dataSourceValue = {
    allFlights,
    setAllFlights,
    fetchCheapestFlight,
    isLoading,
    error,
    cities,
    airlines,
    isDataLoaded,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
  };

  return (
    <DataSourceContext.Provider value={dataSourceValue}>
      {children}
    </DataSourceContext.Provider>
  );
}

export { DataSourceContext, DataSourceProvider };
