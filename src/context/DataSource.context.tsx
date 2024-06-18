import { useState, createContext } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import axios, { AxiosError } from 'axios';
import { Flight, DataSourceContextType } from '../types';
import useFlightInfoTranslator from '../hooks/useFlightInfoTranslator';
// import { CodeContext } from './Code.context';

type TDataSourceProvider = {
  children: React.ReactNode;
};

const HEADERS = {
  'x-rapidapi-key': import.meta.env.VITE_X_RAPIDAPI_KEY as string,
  'x-rapidapi-host': import.meta.env.VITE_X_RAPIDAPI_HOST as string,
  'X-Access-Token': import.meta.env.VITE_TRAVELPAYOUTS_TOKEN_API as string,
};

const CHEAPEST_FLIGHT_ENDPOINT =
  'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap';

const DataSourceContext = createContext<DataSourceContextType>({
  flights: [],
  fetchCheapestFlight: async () => {},
  isLoading: false,
  error: null,
});

function DataSourceProvider({ children }: TDataSourceProvider) {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const { formatFlights } = useFlightInfoTranslator();
  // const { isDataLoaded } = useContext(CodeContext);

  async function fetchCheapestFlight(params: { [key: string]: string }) {
    // if (!isDataLoaded) return;
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
      console.log('data', data);
      const formatedCheapestFlights = formatFlights(data);
      console.log('chepaest flight', formatedCheapestFlights);
      // NEed to patch to cheapest flight from useFlightTrnaslator
      // const flights = Object.keys(data).map((key) => ({
      //   _id: uuidv4(),
      //   date: key,
      //   ...data[key],
      // }));

      setFlights([]);
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

  const dataSourceValue = {
    flights,
    fetchCheapestFlight,
    isLoading,
    error,
  };

  return (
    <DataSourceContext.Provider value={dataSourceValue}>
      {children}
    </DataSourceContext.Provider>
  );
}

export { DataSourceContext, DataSourceProvider };
