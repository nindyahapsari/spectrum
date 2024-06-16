import { useContext } from 'react';
import { DataSourceContext } from '../context/DataSource.context';
import InfoCard from '../components/cards/InfoCard';
import SearchBar from '../components/common/SearchBar/SearchBar';
import Flights from '../components/flights/Flights';

function HomePage() {
  const { flights } = useContext(DataSourceContext);

  function renderContent() {
    if (flights.length === 0) {
      return <InfoCard />;
    }

    return <Flights />;
  }

  return (
    <div className="px-20">
      <SearchBar />

      {renderContent()}
    </div>
  );
}

export default HomePage;
