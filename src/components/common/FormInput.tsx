import React from 'react';
import { Input } from 'react-daisyui';

interface FormInputProps {
  label: string;
  type: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormInput({ label, type, value, name, onChange }: FormInputProps) {
  return (
    <label className="font-semibold text-xl my-5">
      {label}:
      <Input
        className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />
    </label>
  );
}

export default FormInput;
