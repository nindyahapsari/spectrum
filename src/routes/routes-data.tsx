import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import Cart from '../pages/CartPage';
import ProfilePage from '../pages/ProfilePage';
import EditProfilePage from '../pages/EditProfile';
import ComparisonPage from '../pages/ComparisonPage';
import CheckoutPage from '../pages/CheckoutPage';
import SuccessConfirmation from '../components/cart/SuccessConfirmation';

export const routes = [
  { path: '/', Element: HomePage },
  { path: '/about', Element: AboutPage },
  { path: '/signup', Element: SignupPage },
  { path: '/login', Element: LoginPage },
  { path: '/cart', Element: Cart },
  { path: '/profile', Element: ProfilePage },
  { path: '/comparison', Element: ComparisonPage },
  { path: '/edit-profile/:id', Element: EditProfilePage },
  { path: '/checkout', Element: CheckoutPage },
  { path: '/success', Element: SuccessConfirmation },
];

export default routes;
