import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Chip,
  Button,
} from '@material-tailwind/react'

const ProfileCard = (props) => {
  const { username, email } = props
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img
          src="https://docs.material-tailwind.com/img/team-3.jpg"
          alt="profile-picture"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {username}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {email}
        </Typography>
        <div className="px-20">
          <Chip
            className="mt-10"
            variant="ghost"
            size="lg"
            value="Premium User"
          />
        </div>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Button variant="filled">Edit Profile</Button>
      </CardFooter>
    </Card>
  )
}

export default ProfileCard
