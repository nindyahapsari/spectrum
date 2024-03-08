import './HomePage.css'
import SearchBar from '../components/SearchBar'
import FirstStep from '../components/FirstStep'

// searchBar need to get a context to share data between components

const HomePage = () => {
  return (
    <div className="home-container">
      <SearchBar setFilteredResults="London" />
      <FirstStep />
    </div>
  )
}

export default HomePage
