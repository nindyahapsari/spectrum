import useSearchbar from '../../../hooks/useSearchbar';
import SearchCityInput from './SearchCityInput';
import SearchType from './SearchType';
import SearchBarErrorMessage from './SearchBarErrorMessage';

import './SearchBar.css';

function SearchBar() {
  const {
    register,
    handleSubmit,
    control,
    errors,
    filteredDeparture,
    // filteredDestinations,
    handleSelectDeparture,
    // handleSelectDestination,
    handleSearchFlight,
  } = useSearchbar();

  return (
    <form
      onSubmit={handleSubmit(handleSearchFlight)}
      className="mx-auto w-2/3 h-60 my-10 py-3 px-20 border-2 rounded-lg bg-gray-300 backdrop-opacity-50"
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

        <SearchType name="searchType" control={control} errors={errors} />
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
