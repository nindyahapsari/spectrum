import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useSearchBar from '../../../hooks/useSearchbar';

import InputField from './InputField';
import PassengerSelect from './PassengerSelect';
import DatePickerField from './DatePickerField';
import SearchBarErrorMessage from './SearchBarErrorMessage';

import { FormInput } from '../../../@types/formInput';

import './SearchBar.css';

const schema = yup.object({
  destination: yup.string().required('Destination is required'),
  departureDate: yup.date().required('Departure date is required'),
  returnDate: yup.date().required('Return date is required'),
  passengers: yup.string().required('Passengers is required'),
});

interface SearchBarProps {
  setDestinationInput: (value: string) => void;
}

function SearchBar({ setDestinationInput }: SearchBarProps) {
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

  const [filteredDeparture, setFilteredDeparture] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const { filterData } = useSearchBar();
  const destinationValue = watch('destination');
  const departureValue = watch('departure');

  useEffect(() => {
    if (departureValue) {
      const filtered = filterData(departureValue);
      setFilteredDeparture(filtered);
    }

    if (destinationValue) {
      const filtered = filterData(destinationValue);
      setFilteredDestinations(filtered);
    }
  }, [departureValue, destinationValue, filterData]);

  const handleSelectDeparture = (departure: string) => {
    setValue('departure', departure);
    setFilteredDeparture([]);
  };

  const handleSelectDestination = (destination: string) => {
    setValue('destination', destination);
    setFilteredDestinations([]);
  };

  const onSubmit = (data: FormInput) => {
    setDestinationInput(data.destination);
    const filteredData = filterData(data.destination);
    console.log('fileterd Data', filteredData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" h-60 my-10 py-3 px-20 border-2 rounded-lg bg-gray-300 backdrop-opacity-50"
    >
      <div className="flex flex-row flex-wrap gap-4 justify-between items-center my-5">
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0}>
            <InputField
              label="Departure"
              placeholder="From"
              name="departure"
              register={register}
            />
          </div>
          {filteredDeparture.length > 0 && (
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {filteredDeparture.map((departure, index) => (
                <li
                  key={index}
                  className="menu-title"
                  onClick={() => handleSelectDeparture(departure.name)}
                >
                  <div className="flex flex-row justify-between">
                    <div>{departure.name}</div>
                    <div> {departure.code}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="dropdown dropdown-bottom">
          <div tabIndex={0}>
            <InputField
              label="Destination"
              placeholder="Where to"
              name="destination"
              register={register}
            />
          </div>
          {filteredDestinations.length > 0 && (
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {filteredDestinations.map((destination, index) => (
                <li
                  key={index}
                  className="menu-title"
                  onClick={() => handleSelectDestination(destination.name)}
                >
                  <div className="flex flex-row justify-between">
                    <div>{destination.name}</div>
                    <div> {destination.code}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <DatePickerField
          label="Departure Date"
          name="departureDate"
          control={control}
        />
        <DatePickerField
          label="Return Date"
          name="returnDate"
          control={control}
        />
        <PassengerSelect name="passengers" control={control} errors={errors} />
        <button
          type="submit"
          className="mt-6 px-4 py-2 bg-spectrum-primary text-black rounded-md"
        >
          Search Flights
        </button>
      </div>

      <SearchBarErrorMessage errors={errors} />
    </form>
  );
}

export default SearchBar;
