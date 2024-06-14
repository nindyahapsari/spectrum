import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

/*
sample data cities:
 {
    "name_translations": {
      "en": "Banyuwangi"
    },
    "cases": null,
    "country_code": "ID",
    "code": "BWX", -> iata airport code
    "time_zone": "Asia/Jakarta",
    "name": null,
    "coordinates": {
      "lat": -8.21861,
      "lon": 114.36694
    }
  },

*/

const citiesEndpoints = import.meta.env.VITE_TRAVELPAYOUTS_CITIES_URL;

function fetchCities() {
  return axios
    .get(citiesEndpoints, {
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_X_RAPIDAPI_KEY,
        'x-rapidapi-host': import.meta.env.VITE_X_RAPIDAPI_HOST,
        'X-Access-Token': import.meta.env.VITE_TRAVELPAYOUTS_TOKEN_API,
      },
    })
    .then((response) => response.data)
    .catch((error) => console.log('error', error));
}

function useSearchBar() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetchCities()
      .then((fetchedData) => {
        setCities(fetchedData);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const filterData = useCallback(
    (input) => {
      return cities.filter(
        (city) =>
          city.name?.toLowerCase().includes(input.toLowerCase()) ||
          city.code.toLowerCase().includes(input.toLowerCase())
      );
    },
    [cities]
  );

  return { cities, isLoading, error, filterData };
}

export default useSearchBar;
