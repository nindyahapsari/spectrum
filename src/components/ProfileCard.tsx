import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Chip,
  Button,
} from '@material-tailwind/react';

import profilepict from '../assets/Avatar-19.png';

function ProfileCard(props) {
    const { username, email, userId } = props;
    const navigate = useNavigate();

    const handleEditProfile = () => {
        navigate(`/edit-profile/${userId}`);
    };

    return (
        <Card className="w-96 h-">
            <CardHeader floated={false} shadow={false} className="h-80">
                <img src={profilepict} alt="profile-picture" />
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
            <CardFooter divider className="flex justify-center gap-7 pt-2">
                <Button variant="filled" onClick={handleEditProfile}>
          Edit Profile
                </Button>
            </CardFooter>
        </Card>
    );
}

export default ProfileCard;
