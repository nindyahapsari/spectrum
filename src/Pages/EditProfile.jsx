import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

import {
  Card,
  Input,
  Button,
  Typography,
  Alert,
} from '@material-tailwind/react'

import { useParams } from 'react-router-dom'
import { AuthContext } from '../context/Auth.context'

import { BASE_URL } from '../utility/endpoints'

const EditProfile = () => {
  const [editUser, setEditUser] = useState({ name: '', email: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { id } = useParams()

  const { user, updateUser, getToken } = useContext(AuthContext)

  const navigate = useNavigate()

  useEffect(() => {
    setEditUser({ name: user.name, email: user.email })
  }, [id, user])

  const handleChange = (event) => {
    setEditUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const userToken = getToken()

      setIsLoading(true)
      axios
        .put(`${BASE_URL}/auth/edit/${id}`, editUser, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
        })
        .then((response) => {
          if (response.status === 200) {
            const {_id} = response.data
            return axios.get(`${BASE_URL}/api/users/${_id}`)
          } else {
            throw new Error('Failed to update profile')
          }
        })
        .then((res) => {
          if(res && res.status === 200){

          const {_id} = res.data
            updateUser(_id)
            setIsSuccess(true)

          }
        })
        .catch((err) => {
          console.log(err.message)
        })
        .finally(() => {
          setIsLoading(false)
          setTimeout(() => {
            navigate('/profile')
          }, 1000)
        })
      }


  const closeModal = () => {
    setIsSuccess(false)
    setIsLoading(false)
    navigate('/profile') // navigate to the profile page
  }

  return (
    <div>
      {isSuccess && (
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
          </div>

          <Button
            loading={isLoading}
            className="mt-6"
            fullWidth
            onClick={handleSubmit}
          >
            Save changes
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default EditProfile
