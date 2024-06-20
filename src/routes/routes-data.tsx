import ProtectedRoute from './ProtectedRoutes';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ProfilePage from '../pages/ProfilePage';
import EditProfilePage from '../pages/EditProfile';
import ComparisonPage from '../pages/ComparisonPage';
import SuccessConfirmation from '../components/cart/SuccessConfirmation';

function routes() {
  return [
    { path: '/', element: <HomePage /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/signup', element: <SignupPage /> },
    { path: '/login', element: <LoginPage /> },

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
