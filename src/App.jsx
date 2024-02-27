import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import RoutesRender from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <RoutesRender />
      <Footer />
      <SearchBar />
    </div>
  )
}

export default App
