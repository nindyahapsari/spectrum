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

type CodeContextType = {
  cities: CityCodeName[];
};

const HEADERS = {
  'x-rapidapi-key': import.meta.env.VITE_X_RAPIDAPI_KEY as string,
  'x-rapidapi-host': import.meta.env.VITE_X_RAPIDAPI_HOST as string,
  'X-Access-Token': import.meta.env.VITE_TRAVELPAYOUTS_TOKEN_API as string,
};

const CodeContext = createContext<CodeContextType | null>(null);

const CodeProvider = ({ children }: ReactNode) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const cities = await axios.get(
        'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/data/en-GB/cities.json',
        { headers: HEADERS }
      );

      const cityCodeName = cities.data.map((city: City) => {
        return {
          [city.code]: city.name_translations.en,
        };
      });

      setCities(cityCodeName);
    };

    fetchCities();
  }, []);

  const value = {
    cities,
  };

  return <CodeContext.Provider value={value}>{children}</CodeContext.Provider>;
};

export { CodeContext, CodeProvider };
