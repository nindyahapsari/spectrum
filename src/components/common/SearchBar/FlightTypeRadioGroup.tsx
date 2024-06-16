import { Controller, Control, FieldErrors } from 'react-hook-form';
import { FormInput } from '../../../types';

interface FlightTypeRadioGroupProps {
  labels: string[];
  name: 'flightType';
  control: Control<FormInput>;
  errors?: FieldErrors;
}

function FlightTypeRadioGroup({
  labels,
  name,
  control,
}: FlightTypeRadioGroupProps) {
  return (
    <div className="my-5">
      {labels.map((label, i) => (
        <Controller
          key={i}
          name={name}
          control={control}
          render={({ field }) => (
            <label className="mx-2 inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                {...field}
                value={label}
                onChange={(e) => field.onChange(e.target.value)}
              />
              <span className="ml-1">{label}</span>
            </label>
          )}
        />
      ))}
    </div>
  );
}

export default FlightTypeRadioGroup;
