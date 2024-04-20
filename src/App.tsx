import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import RoutesRender from './routes'
import axios from 'axios'
import { useTheme } from './context/ThemeContext'
import ThemeSwitcher from './components/ThemeSwitch'

axios.defaults.withCredentials = true

const App = () => {
  const theme = useTheme()
  const isDarkMode = theme ? theme.darkMode : false
  return (
    <div className={isDarkMode ? 'dark' : 'light' + 'App'}>
      <Navbar />
      <ThemeSwitcher>
        <RoutesRender />
      </ThemeSwitcher>

      <Footer />
    </div>
  )
}

export default App
