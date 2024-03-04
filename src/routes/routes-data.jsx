import LandingPage from '../Pages/LandingPage'
import HomePage from '../Pages/HomePage'
import ErrorPage from '../Pages/ErrorPage'
import AboutPage from '../Pages/AboutPage'
import LoginPage from '../Pages/LoginPage'
import SignupPage from '../Pages/SignupPage'

export const routes = [
  { path: '/landingpage', Element: LandingPage },
  { path: '/', Element: HomePage },
  { path: '/about', Element: AboutPage },
  { path: '/signup', Element: SignupPage },
  { path: '*', Element: ErrorPage },
  { path: '/login', Element: LoginPage },
]
