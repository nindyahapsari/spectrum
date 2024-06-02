import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

import { FormInputs } from '../../../types';

interface InputFieldProps {
  label: string;
  placeholder: string;
  register: UseFormRegister<FormInputs>;
  name: string;
  readOnly?: boolean;
  value?: string;
  errors?: FieldErrors;
}

function InputField({
  label,
  placeholder,
  register,
  name,
  readOnly,
  value,
  errors,
}: InputFieldProps) {
  return (
    <div className="mx-2">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        className="form-input mt-1 block w-full"
        placeholder={placeholder}
        {...register(name)}
        readOnly={readOnly}
        defaultValue={value}
      />
      {errors && errors[name] && (
        <p className="text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
}

export default InputField;
