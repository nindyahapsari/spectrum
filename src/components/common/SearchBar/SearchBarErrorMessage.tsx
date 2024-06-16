import { FormInput } from '../../../types';
import { FieldErrors } from 'react-hook-form';

interface SearchBarErrorMessageProps {
  errors: FieldErrors<FormInput>;
}

function SearchBarErrorMessage({ errors }: SearchBarErrorMessageProps) {
  return (
    <div>
      {Object.keys(errors).length > 0 && (
        <div className=" my-5 text-center">
          <p className="text-red-500 text-sm">
            Please fill all the information
          </p>
        </div>
      )}
    </div>
  );
}

export default SearchBarErrorMessage;
