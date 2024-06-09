import HomePage from '../pages/HomePage';
// import AboutPage from '../Pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import Cart from '../pages/CartPage';
import FlightsPage from '../components/flights/Flights';
// import ResultPage from '../Pages/ResultsPage';
import ProfilePage from '../pages/ProfilePage';
import EditProfilePage from '../pages/EditProfile';
import ComparisonPage from '../pages/ComparisonPage';

export const routes = [
  { path: '/', Element: HomePage },
  // { path: '/about', Element: AboutPage },
  { path: '/signup', Element: SignupPage },
  { path: '/login', Element: LoginPage },
  { path: '/cart', Element: Cart },
  { path: '/flights', Element: FlightsPage },
  // { path: '/resultpage', Element: ResultPage },
  { path: '/profile', Element: ProfilePage },
  { path: '/comparison', Element: ComparisonPage },
  { path: '/edit-profile/:id', Element: EditProfilePage },
];

export default routes;
