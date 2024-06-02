import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import DatePicker from '../../utilities/DatePicker';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';

const labels = ['Return', 'One way', 'Multi City', 'Direct Flights'];

const schema = yup.object({
  destination: yup.string().required('Destination is required'),
  departureDate: yup.date().required('Departure date is required'),
  returnDate: yup.date().nullable(),
  passengers: yup.string().required('Passengers is required'),
  flightType: yup.string().required('Flight type is required'),
});

interface FormInputs {
  destination: string;
  departureDate: Date | null;
  returnDate: Date | null;
  passengers: string;
  flightType: string;
}

const SearchBar: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-56 my-10 py-5 px-20 border-2 rounded-lg bg-gray-300 backdrop-opacity-50"
    >
      <div className="flex flex-row justify-between my-5">
        <div className="flex flex-row justify-between">
          <div className="mx-2">
            <input
              type="text"
              className="form-input mt-1 block w-full"
              placeholder="From"
              value="Berlin"
              readOnly
            />
          </div>
          <div>
            <input
              type="text"
              className="form-input mt-1 block w-full"
              placeholder="Where to"
              {...register('destination')}
            />
            {errors.destination && (
              <p className="text-red-500">{errors.destination.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-row mx-10">
          <Controller
            name="departureDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                label="Departure"
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                className="form-input mt-1 block w-full"
              />
            )}
          />
          <Controller
            name="returnDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                label="Return"
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                className="form-input mt-1 block w-full"
              />
            )}
          />
        </div>

        <div className="w-72">
          <Controller
            name="passengers"
            control={control}
            render={({ field }) => (
              <select className="form-select mt-1 block w-full" {...field}>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
              </select>
            )}
          />
          {errors.passengers && (
            <p className="text-red-500">{errors.passengers.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="my-5">
          {labels.map((label, i) => (
            <Controller
              key={i}
              name="flightType"
              control={control}
              render={({ field }) => (
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    {...field}
                    value={label}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <span className="ml-2">{label}</span>
                </label>
              )}
            />
          ))}
          {errors.flightType && (
            <p className="text-red-500">{errors.flightType.message}</p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Search Flights
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
