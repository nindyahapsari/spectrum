import ProtectedRoute from './ProtectedRoutes';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import CartPage from '../pages/CartPage';
import ProfilePage from '../pages/ProfilePage';
import EditProfilePage from '../pages/EditProfile';
import ComparisonPage from '../pages/ComparisonPage';
import CheckoutPage from '../pages/CheckoutPage';
import SuccessConfirmation from '../components/cart/SuccessConfirmation';

function routes() {
  return [
    { path: '/', element: <HomePage /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/signup', element: <SignupPage /> },
    { path: '/login', element: <LoginPage /> },
    {
      path: '/cart',
      element: (
        <ProtectedRoute>
          <CartPage />
        </ProtectedRoute>
      ),
    },
    {
      path: '/profile',
      element: (
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      ),
    },
    {
      path: '/comparison',
      element: (
        <ProtectedRoute>
          <ComparisonPage />
        </ProtectedRoute>
      ),
    },
    {
      path: '/edit-profile/:id',
      element: (
        <ProtectedRoute>
          <EditProfilePage />
        </ProtectedRoute>
      ),
    },
    {
      path: '/checkout',
      element: (
        <ProtectedRoute>
          <CheckoutPage />
        </ProtectedRoute>
      ),
    },
    {
      path: '/success',
      element: (
        <ProtectedRoute>
          <SuccessConfirmation />
        </ProtectedRoute>
      ),
    },
  ];
}

export default routes;
