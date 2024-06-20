import { useState, useEffect, useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useGetCities from './useGetCities';
import { FormInput, City } from '../types';
import { DataSourceContext } from '../context/DataSource.context';

const schema = yup.object({
  departure: yup.string().required('Departure city is required'),
  searchType: yup.string(),
});

function useSearchbar() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  const { cities } = useGetCities();

  const [filteredDeparture, setFilteredDeparture] = useState<City[]>([]);
  const [iatacode, setIataCode] = useState({ departure: '', destination: '' });

  const { fetchCheapestFlight } = useContext(DataSourceContext);

  const departureValue = watch('departure');

  const filterCities = useCallback(
    (input: string) => {
      if (!cities) return [];
      return cities.filter((city) =>
        city.name?.toLowerCase().includes(input.toLowerCase())
      );
    },
    [cities]
  );

  useEffect(() => {
    if (!cities) return;
    if (departureValue) {
      const filtered = filterCities(departureValue);
      setFilteredDeparture(filtered);
    }
  }, [departureValue, cities, filterCities]);

  const handleSelectDeparture = (departure: { name: string; code: string }) => {
    setValue('departure', departure.name ?? '');
    setIataCode((prev) => ({ ...prev, departure: departure.code }));
    setFilteredDeparture([]);
  };

  // TODO: Still need it for next feature, don't delete it
  // const convertDateToISO = (departureDate: Date): string => {
  //   return departureDate.toISOString().split('T')[0];
  // };

  const handleSearchFlight = (data: { departure: string }) => {
    const flightParams = {
      ...data,
      destination: iatacode.destination,
      origin: iatacode.departure,
    };

    fetchCheapestFlight(flightParams);
  };

  return {
    register,
    handleSubmit,
    control,
    errors,
    filteredDeparture,
    handleSelectDeparture,
    handleSearchFlight,
  };
}

export default useSearchbar;
