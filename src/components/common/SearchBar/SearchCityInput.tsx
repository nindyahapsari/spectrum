import { UseFormRegister } from 'react-hook-form';

import { FormInput } from '../../../@types/formInput';

interface City {
  name_translations: {
    en: string;
  };
  cases: number | null;
  country_code: string;
  code: string;
  time_zone: string;
  name: string | null;
  coordinates: {
    lat: number;
    lon: number;
  };
}

interface InputFieldProps<T extends City> {
  label: string;
  placeholder: string;
  register: UseFormRegister<FormInput>;
  name: keyof FormInput;
  readOnly?: boolean;
  value?: string;
  filteredCities: T[];
  handleCities: (city: string) => void;
}

function SearchCityInput<T extends City>({
  label,
  placeholder,
  register,
  name,
  readOnly,
  value,
  filteredCities,
  handleCities,
}: InputFieldProps<T>) {
  return (
    <div className="mx-2">
      <label htmlFor={name}>
        {label}
        <input
          type="text"
          className="form-input mt-1 block w-full h-10 border rounded px-4  bg-gray-50"
          placeholder={placeholder}
          {...register(name)}
          readOnly={readOnly}
          defaultValue={value}
        />
      </label>

      {filteredCities.length > 0 && (
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-full "
        >
          {filteredCities.map((city, index) => (
            <li
              key={index}
              className="menu-title"
              onClick={() => handleCities(city.name ?? '')}
            >
              <div className="flex flex-row justify-between text-black">
                <div>{city.name}</div>
                <div> {city.code}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchCityInput;
