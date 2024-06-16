import { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useGetCities from './useGetCities';
import { FormInput } from '../types';

interface City {
  name_translations: {
    en: string;
  };
  cases: number | null;
  country_code: string;
  code: string;
  time_zone: string;
  name: string | null;
  coordinates: {
    lat: number;
    lon: number;
  };
}

const schema = yup.object({
  departure: yup.string().required('Departure is required'),
  destination: yup.string().required('Destination is required'),
  departureDate: yup.date().required('Departure date is required'),
  returnDate: yup.date().required('Return date is required'),
  passengers: yup.string().required('Passengers is required'),
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
  const [filteredDestinations, setFilteredDestinations] = useState<City[]>([]);

  const destinationValue = watch('destination');
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

    if (destinationValue) {
      const filtered = filterCities(destinationValue);
      setFilteredDestinations(filtered);
    }
  }, [departureValue, destinationValue, cities, filterCities]);

  const handleSelectDeparture = (departure: string) => {
    setValue('departure', departure);
    setFilteredDeparture([]);
  };

  const handleSelectDestination = (destination: string) => {
    setValue('destination', destination);
    setFilteredDestinations([]);
  };

  const handleSearchFlight = (data: FormInput) => {
    console.log(data);
  };

  return {
    register,
    handleSubmit,
    control,
    errors,
    filteredDeparture,
    filteredDestinations,
    handleSelectDeparture,
    handleSelectDestination,
    handleSearchFlight,
  };
}

export default useSearchbar;
