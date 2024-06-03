import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Typography, Spinner } from '@material-tailwind/react';
import { AuthContext } from '../context/Auth.context';
import ProfileCard from '../components/cards/ProfileCard';
import TransactionsTable from '../components/utilities/TransactionsTable';

// import firstIcon from '../assets/airline-icon-first.png';
// import secondIcon from '../assets/airline-icon-second.png';

// const TABLE_HEAD = ['Transaction', 'Amount', 'Date', 'Status', 'Account', ''];

// const TABLE_ROWS = [
//   {
//     img: firstIcon,
//     name: 'Air1234',
//     amount: '$2,500',
//     date: 'Wed 3:00pm',
//     status: 'paid',
//     account: 'visa',
//     accountNumber: '1234',
//     expiry: '06/2026',
//   },
//   {
//     img: secondIcon,
//     name: 'Lufthansa',
//     amount: '$5,000',
//     date: 'Wed 1:00pm',
//     status: 'paid',
//     account: 'master-card',
//     accountNumber: '1234',
//     expiry: '06/2026',
//   },
// ];

function ProfilePage() {
  const { authenticateUser, isLoggedIn, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [authenticateUser]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div>Loading your content...</div>
      </div>
    );
  }

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    id: '12345',
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white h-screen shadow-md rounded-lg max-w-5xl p-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">My Account</h2>
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <div className="flex-1 mb-6 lg:mb-0">
            <ProfileCard
              username={user.name}
              email={user.email}
              userId={user.id}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Transaction History</h3>
            <TransactionsTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
