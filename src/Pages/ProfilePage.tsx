import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Spinner } from '@material-tailwind/react';
import { AuthContext } from '../context/Auth.context';
import ProfileCard from '../components/ProfileCard';
import TransactionsTable from '../components/TransactionsTable';

import firstIcon from '../assets/airline-icon-first.png';
import secondIcon from '../assets/airline-icon-second.png';

const TABLE_HEAD = ['Transaction', 'Amount', 'Date', 'Status', 'Account', ''];

const TABLE_ROWS = [
  {
    img: firstIcon,
    name: 'Air1234',
    amount: '$2,500',
    date: 'Wed 3:00pm',
    status: 'paid',
    account: 'visa',
    accountNumber: '1234',
    expiry: '06/2026',
  },
  {
    img: secondIcon,
    name: 'Lufthansa',
    amount: '$5,000',
    date: 'Wed 1:00pm',
    status: 'paid',
    account: 'master-card',
    accountNumber: '1234',
    expiry: '06/2026',
  },
];

function ProfilePage() {
  const { authenticateUser, isLoggedIn, user, isLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }

    if (!user) {
      authenticateUser();
    }
  }, [user, authenticateUser]);

  if (isLoading || !user) {
    return (
      <div className="flex flex-col items-center justify-center h-screen overflow-y-auto">
        <Spinner className="h-12 w-12" />
        <Typography>Loading your content</Typography>
      </div>
    );
  }

  const { name, email, _id } = user;

  return (
    <div className="flex items-center justify-center h-screen overflow-y-auto">
      <div className="m-10">
        <div className="m-10">
          <Typography variant="h3">Welcome back {name} !</Typography>
        </div>

        <div className="flex flex-row w-full items-center">
          <div className="m-10">
            <ProfileCard username={name} email={email} userId={_id} />
          </div>

          <div>
            <div>
              <TransactionsTable
                tableHead={TABLE_HEAD}
                tableRows={TABLE_ROWS}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
