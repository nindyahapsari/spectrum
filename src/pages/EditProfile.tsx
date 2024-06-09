// import axios from 'axios';

// import { useNavigate, useParams } from 'react-router-dom';

// import { AuthContext } from '../context/Auth.context';

// import { BASE_URL } from '../utils/endpoints';

function EditProfile() {
  // const [editUser, setEditUser] = useState({ name: '', email: '' });
  // const [isLoading, setIsLoading] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);
  // const { id } = useParams();

  // const { user, getToken, storeToken, authenticateUser } =
  //   useContext(AuthContext);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (user) {
  //     setEditUser({ name: user.name, email: user.email });
  //   }
  // }, []);

  // const handleChange = (event) => {
  //   setEditUser({ ...user, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const userToken = getToken();

  //   setIsLoading(true);
  //   axios
  //     .put(`${BASE_URL}/auth/edit/${id}`, editUser, {
  //       headers: {
  //         Authorization: `Bearer ${userToken}`,
  //       },
  //     })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         const newToken = response.data;
  //         storeToken(newToken);
  //         authenticateUser();
  //       } else {
  //         throw new Error('Failed to update profile');
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //       setTimeout(() => {
  //         navigate('/profile');
  //       }, 1000);
  //     });
  // };

  // const closeModal = () => {
  //   setIsSuccess(false);
  //   setIsLoading(false);
  //   navigate('/profile');
  // };

  return (
    <div>
      Edit Profile
      {/* {isSuccess && (
        <Alert color="green" onClose={closeModal}>
          Info has been updated
        </Alert>
      )}
      <Card className="flex flex-col m-5" color="transparent" shadow={false}>
        <Typography className="text-center" variant="h4" color="blue-gray">
          Edit Profile
        </Typography>

        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              name="name"
              value={editUser.name}
              onChange={handleChange}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              name="email"
              value={editUser.email}
              onChange={handleChange}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
          </div> */}
      <button className="mt-6" onClick={handleSubmit}>
        Save changes
      </button>
    </div>
  );
}

export default EditProfile;
