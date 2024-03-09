import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import RoutesRender from './routes'
import axios from 'axios'
import { useTheme } from './components/ThemeContext'
import ThemeSwitcher from './components/ThemeSwitch'

axios.defaults.baseURL = 'http://localhost:5005'
axios.defaults.withCredentials = true

const App = () => {
  const { darkMode } = useTheme()
  return (
    <div className={darkMode ? 'dark' : 'light' + 'App'}>
      <Navbar />
      <ThemeSwitcher>
        <RoutesRender />
      </ThemeSwitcher>

      <Footer />
    </div>
  )
}

export default App
