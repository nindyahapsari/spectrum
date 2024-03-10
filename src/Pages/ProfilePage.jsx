import React, { useContext } from 'react'
import { AuthContext } from '../context/Auth.context'
import ProfileCard from '../components/ProfileCard'
import TransactionsTable from '../components/TransactionsTable'

import { Typography, Spinner } from '@material-tailwind/react'

const TABLE_HEAD = ['Transaction', 'Amount', 'Date', 'Status', 'Account', '']

const TABLE_ROWS = [
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-spotify.svg',
    name: 'Spotify',
    amount: '$2,500',
    date: 'Wed 3:00pm',
    status: 'paid',
    account: 'visa',
    accountNumber: '1234',
    expiry: '06/2026',
  },
  {
    img: 'https://docs.material-tailwind.com/img/logos/logo-amazon.svg',
    name: 'Amazon',
    amount: '$5,000',
    date: 'Wed 1:00pm',
    status: 'paid',
    account: 'master-card',
    accountNumber: '1234',
    expiry: '06/2026',
  },
]

const ProfilePage = () => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

  if (!user) {
    return <Spinner />
  }
  return (
    <div className="m-10">
      <div className="m-10">
        <Typography variant="h3">Welcome back {user.name} !</Typography>
      </div>

      <div className="flex flex-row w-full items-center">
        <div className="m-10">
          <ProfileCard
            username={user.name}
            email={user.email}
            userId={user._id}
          />
        </div>

        <div>
          <div>
            <TransactionsTable tableHead={TABLE_HEAD} tableRows={TABLE_ROWS} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
