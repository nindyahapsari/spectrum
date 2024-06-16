import InfoCard from '../components/cards/InfoCard';
import SearchBar from '../components/common/SearchBar/SearchBar';

function HomePage() {
  function renderContent() {
    // If there is no search query, show the InfoCard
    // Otherwise, show the search results

    return <InfoCard />;
  }

  return (
    <div className="px-20">
      <SearchBar />

      {renderContent()}
    </div>
  );
}

export default HomePage;
