import React from 'react';
import { Controller, Control, FieldErrors } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { FormInputs } from '../../../types';

interface DatePickerFieldProps {
  label: string;
  name: 'departureDate' | 'returnDate';
  control: Control<FormInputs>;
  errors?: FieldErrors;
}

function DatePickerField({ label, name, control }: DatePickerFieldProps) {
  return (
    <div className="mx-2">
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            selected={field.value}
            onChange={(date: Date) => field.onChange(date)}
            className="date-picker-input form-input mt-1 block w-full h-10 border rounded px-4  bg-gray-50"
          />
        )}
      />
      {/* {errors && errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )} */}
    </div>
  );
}

export default DatePickerField;
