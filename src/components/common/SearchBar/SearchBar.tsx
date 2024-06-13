import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormInput) => {
    setDestinationInput(data.destination);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" h-60 my-10 py-3 px-20 border-2 rounded-lg bg-gray-300 backdrop-opacity-50"
    >
      <div className="flex flex-row flex-wrap gap-4 justify-between items-center my-5">
        <InputField
          label="Departure"
          placeholder="From"
          name="departureDate"
          register={register}
          value="Berlin"
          readOnly
        />
        <InputField
          label="Destination"
          placeholder="Where to"
          name="destination"
          register={register}
        />
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
