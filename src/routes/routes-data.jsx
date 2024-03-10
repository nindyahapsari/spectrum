import LandingPage from '../Pages/LandingPage'
import HomePage from '../Pages/HomePage'
import ErrorPage from '../Pages/ErrorPage'
import AboutPage from '../Pages/AboutPage'
import LoginPage from '../Pages/LoginPage'
import SignupPage from '../Pages/SignupPage'
import Cart from '../Pages/Cart'
import ConfirmationPage from '../Pages/ConfirmationPage'
import FlightsPage from '../components/Flights'
import ResultPage from '../Pages/ResultsPage'
import ProfilePage from '../Pages/ProfilePage'

export const routes = [
  { path: '/landingpage', Element: LandingPage },
  { path: '/', Element: HomePage },
  { path: '/about', Element: AboutPage },
  { path: '/signup', Element: SignupPage },
  { path: '/login', Element: LoginPage },
  { path: '/cart', Element: Cart },
  { path: '/confirmation', Element: ConfirmationPage },
  { path: '/flights', Element: FlightsPage },
  { path: '/resultpage', Element: ResultPage },
  { path: '/profile', Element: ProfilePage },
  { path: '*', Element: ErrorPage },
]

export default routes
