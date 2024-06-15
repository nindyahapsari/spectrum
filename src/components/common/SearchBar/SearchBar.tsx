import useSearchbar from '../../../hooks/useSearchbar';
import SearchCityInput from './SearchCityInput';
import PassengerSelect from './PassengerSelect';
import DatePickerField from './DatePickerField';
import SearchBarErrorMessage from './SearchBarErrorMessage';

import './SearchBar.css';

function SearchBar() {
  const {
    register,
    handleSubmit,
    control,
    errors,
    filteredDeparture,
    filteredDestinations,
    handleSelectDeparture,
    handleSelectDestination,
    handleSearchFlight,
  } = useSearchbar();

  return (
    <form
      onSubmit={handleSubmit(handleSearchFlight)}
      className=" h-60 my-10 py-3 px-20 border-2 rounded-lg bg-gray-300 backdrop-opacity-50"
    >
      <div className="flex flex-row flex-wrap gap-4 justify-between items-center my-5">
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0}>
            <SearchCityInput
              label="Departure"
              placeholder="From"
              name="departure"
              register={register}
              filteredCities={filteredDeparture}
              handleCities={handleSelectDeparture}
            />
          </div>
        </div>

        <div className="dropdown dropdown-bottom">
          <div tabIndex={0}>
            <SearchCityInput
              label="Destination"
              placeholder="Where to"
              name="destination"
              register={register}
              filteredCities={filteredDestinations}
              handleCities={handleSelectDestination}
            />
          </div>
        </div>

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
