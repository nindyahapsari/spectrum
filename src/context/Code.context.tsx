import { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

type City = {
  name_translations: {
    en: string;
  };
  cases: {
    su: string;
  };
  country_code: string;
  code: string;
  time_zone: string;
  name: string;
  coordinates: {
    lat: number;
    lon: number;
  };
};

type CityCodeName = {
  [key: string]: string;
};

type AirlineCodeName = {
  [key: string]: string;
};

type Airline = {
  name_translation: {
    en: string;
  };
  code: string;
  is_lowcost: boolean;
  name: string | null;
};

type CodeContextType = {
  cities: CityCodeName[];
  airlines: AirlineCodeName[];
  isDataLoaded: boolean;
};

const HEADERS = {
  'x-rapidapi-key': import.meta.env.VITE_X_RAPIDAPI_KEY as string,
  'x-rapidapi-host': import.meta.env.VITE_X_RAPIDAPI_HOST as string,
  'X-Access-Token': import.meta.env.VITE_TRAVELPAYOUTS_TOKEN_API as string,
};

const CITIES_ENDPOINT =
  'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/data/en-GB/cities.json';

const AIRLINES_ENDPOINT =
  'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/data/en-GB/airlines.json';

const CodeContext = createContext<CodeContextType>({
  cities: [],
  airlines: [],
  isDataLoaded: false,
});

const CodeProvider = ({ children }: ReactNode) => {
  const [cities, setCities] = useState([]);
  const [airlines, setAirlines] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  //   const fetchCities = async () => {
  //     const cities =

  //     const cityCodeName = cities.data.map((city: City) => {
  //       return {
  //         [city.code]: city.name_translations.en,
  //       };
  //     });

  //     setCities(cityCodeName);
  //   };

  //   const fetchAirlines = async () => {
  //     const airlines = await axios.get(AIRLINES_ENDPOINT, { headers: HEADERS });
  //     const airlineCodeName = airlines.data.map((airline: Airline) => {
  //       return {
  //         [airline.code]: airline.name_translations.en,
  //       };
  //     });
  //     setAirlines(airlineCodeName);
  //   };

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
          (acc: CityCodeName[], city: City) => {
            acc[city.code] = city.name_translations.en;
            return acc;
          },
          {}
        );

        const airlineCodeName = airlineResponse.data.reduce(
          (acc: AirlineCodeName[], airline: Airline) => {
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
      }
    };

    setIsDataLoaded(false);

    fetchData();
  }, []);

  console.log('cities context', cities);
  console.log('airlines context', airlines);

  const value = {
    cities,
    airlines,
    isDataLoaded,
  };

  return <CodeContext.Provider value={value}>{children}</CodeContext.Provider>;
};

export { CodeContext, CodeProvider };
