import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import RoutesRender from './routes';
import { useTheme } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitch';

axios.defaults.withCredentials = true;

function App() {
  const theme = useTheme();
  const isDarkMode = theme ? theme.darkMode : false;
  return (
    <div className={isDarkMode ? 'dark' : 'light' + 'App'}>
      <Navbar />
      <ThemeSwitcher>
        <RoutesRender />
      </ThemeSwitcher>

      <Footer />
    </div>
  );
}

export default App;
