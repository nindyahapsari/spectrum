import './App.css';
import axios from 'axios';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer';

import RoutesRender from './routes';

axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <RoutesRender />
      </div>
      <Footer />
    </div>
  );
}

export default App;
