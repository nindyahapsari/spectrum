import './App.css'
import Navbar from './components/Navbar'
import RoutesRender from './routes'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5005'
axios.defaults.withCredentials = true

const App = () => {
  return (
    <div>
      <Navbar />
      <RoutesRender />
    </div>
  )
}

export default App
