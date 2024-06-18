import { Controller, Control, FieldErrors } from 'react-hook-form';
import { FormInput } from '../../../types';

interface SearchTypeProps {
  name: 'SearchType';
  control: Control<FormInput>;
  errors?: FieldErrors;
}

function SearchType({ name, control }: SearchTypeProps) {
  return (
    <div className="w-72 mx-2 ">
      <label htmlFor={name}>Search</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select
            className="form-select block w-full form-input mt-1 h-10 border rounded px-2 bg-gray-50"
            {...field}
          >
            <option value="1">Cheapest Ticket</option>
            <option value="2">
              Cheapest Ticket every day in a month (coming soon)
            </option>
          </select>
        )}
      />
    </div>
  );
}

export default SearchType;
