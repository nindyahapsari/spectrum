import { Card, Button } from 'react-daisyui';
// import { useNavigate } from 'react-router-dom';

// import profilepict from '../assets/Avatar-19.png';

type ProfileCardProps = {
  username?: string;
  email?: string;
  userId?: string;
};

function ProfileCard({ username, email, userId }: ProfileCardProps) {
  // const navigate = useNavigate();

  // const handleEditProfile = () => {
  //   navigate(`/edit-profile/${userId}`);
  // };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <Card>
        <Card.Body>
          <Card.Title className="my-5 text-black text-lg">
            Account Information
          </Card.Title>
          <div>
            <div className="text-sm text-black mb-2">
              <strong>Name:</strong> {username}
            </div>
            <div className="text-sm text-black mb-2">
              <strong>Email:</strong> {email}
            </div>
            <div className="text-sm text-black mb-4">
              <strong>User ID:</strong> {userId}
            </div>
          </div>

          <Card.Actions className="justify-start">
            <Button className="bg-spectrum-primary px-2 py-3 rounded-md text-black">
              Edit Profile
            </Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProfileCard;
