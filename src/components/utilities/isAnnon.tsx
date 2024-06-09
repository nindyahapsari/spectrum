// import { useContext } from 'react';
// import PropTypes from 'prop-types';
// import { AuthContext } from '../context/auth.context';
// import { Navigate } from 'react-router-dom';

// function IsAnnon({ children }) {
//   const { isLoggedIn, isLoading } = useContext(AuthContext);

//   if (isLoading) return <p>Loading...</p>;

//   if (isLoggedIn) {
//     return <Navigate to="/" />;
//   } else {
//     return children;
//   }
// }

// IsAnnon.propTypes = {
//   children: PropTypes.node,
// };

// export default IsAnnon;
