import LandingPage from '../Pages/LandingPage'
import HomePage from '../Pages/HomePage'
import ErrorPage from '../Pages/ErrorPage'
import AboutPage from '../Pages/AboutPage'

export const routes = [
  { path: '/landingpage', Element: LandingPage },
  { path: '/', Element: HomePage },
  { path: '/about', Element: AboutPage },
  { path: '*', Element: ErrorPage },
]
