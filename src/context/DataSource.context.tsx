import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios, { AxiosError } from 'axios';
import { Flight, DataSourceContextType } from '../types';

type TDataSourceProvider = {
  children: React.ReactNode;
};

const HEADERS = {
  'x-rapidapi-key': import.meta.env.VITE_X_RAPIDAPI_KEY as string,
  'x-rapidapi-host': import.meta.env.VITE_X_RAPIDAPI_HOST as string,
  'X-Access-Token': import.meta.env.VITE_TRAVELPAYOUTS_TOKEN_API as string,
};

const FLIGHT_ENDPOINT = import.meta.env
  .VITE_TRAVELPAYOUTS_FLIGHT_DAY_OF_MONTH_URL as string;

const DataSourceContext = createContext<DataSourceContextType>({
  flights: [],
  fetchFlight: async () => {},
  isLoading: false,
  error: null,
});

function DataSourceProvider({ children }: TDataSourceProvider) {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  async function fetchFlight(params: { [key: string]: string }) {
    const options = {
      method: 'GET',
      url: FLIGHT_ENDPOINT,
      params: {
        calendar_type: 'departure_date',
        destination: params.destination,
        currency: 'EUR',
        origin: params.origin,
        return_date: params.return_date,
        depart_date: params.depart_date,
      },
      headers: HEADERS,
    };

    setIsLoading(true);

    try {
      const response = await axios.request(options);

      const data = response.data.data;
      const flights = Object.keys(data).map((key) => ({
        _id: uuidv4(),
        date: key,
        ...data[key],
      }));

      setFlights(flights);
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
    fetchFlight,
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
