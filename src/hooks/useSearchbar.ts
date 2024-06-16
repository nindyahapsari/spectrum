import { useState, useEffect, useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useGetCities from './useGetCities';
import { FormInput, City } from '../types';
import { DataSourceContext } from '../context/DataSource.context';

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
  const [iatacode, setIataCode] = useState({ departure: '', destination: '' });

  const { fetchFlight } = useContext(DataSourceContext);

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

  const handleSelectDeparture = (departure: { name: string; code: string }) => {
    console.log('handleSelectDeparture', departure);
    setValue('departure', departure.name ?? '');
    setIataCode((prev) => ({ ...prev, departure: departure.code }));
    setFilteredDeparture([]);
  };

  const handleSelectDestination = (destination: {
    name: string;
    code: string;
  }) => {
    setValue('destination', destination.name ?? '');
    setIataCode((prev) => ({ ...prev, destination: destination.code }));
    setFilteredDestinations([]);
  };

  const handleSearchFlight = (data: FormInput) => {
    console.log('handleSearchFlight', data);
    const flightParams = {
      destination: iatacode.destination,
      origin: iatacode.departure,
    };

    fetchFlight(flightParams);
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
