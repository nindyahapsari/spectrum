import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RoutesRender from './routes'

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
