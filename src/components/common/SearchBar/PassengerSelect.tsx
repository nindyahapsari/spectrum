import { Controller, Control, FieldErrors } from 'react-hook-form';
import { FormInput } from '../../../@types/formInput';

interface PassengerSelectProps {
  name: 'passengers';
  control: Control<FormInput>;
  errors?: FieldErrors;
}

function PassengerSelect({ name, control }: PassengerSelectProps) {
  return (
    <div className="w-72 mx-2 ">
      <label htmlFor={name}>Passenger</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select
            className="form-select block w-full form-input mt-1 h-10 border rounded px-2 bg-gray-50"
            {...field}
          >
            <option value="1">1 Person</option>
            <option value="2">2 Persons</option>
            <option value="3">3 Persons</option>
          </select>
        )}
      />
    </div>
  );
}

export default PassengerSelect;
