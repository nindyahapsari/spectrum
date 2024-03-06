import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RoutesRender from './routes'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5005'
axios.defaults.withCredentials = true

const App = () => {
  return (
    <div>
      <Navbar />
      <RoutesRender />
      <Footer />
    </div>
  )
}

export default App
