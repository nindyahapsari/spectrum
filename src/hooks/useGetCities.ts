import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { City } from '../types';

const HEADERS = {
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_X_RAPIDAPI_KEY as string,
    'x-rapidapi-host': import.meta.env.VITE_X_RAPIDAPI_HOST as string,
    'X-Access-Token': import.meta.env.VITE_TRAVELPAYOUTS_TOKEN_API as string,
  },
};

const CITIES_ENDPOINT = import.meta.env.VITE_TRAVELPAYOUTS_CITIES_URL as string;

function useGetCities() {
  const [cities, setCities] = useState<City[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(CITIES_ENDPOINT, HEADERS);
        setCities(response.data);
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error as Error);
        } else {
          setError(new Error('An unexpected error occurred'));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { cities, isLoading, error };
}

export default useGetCities;
