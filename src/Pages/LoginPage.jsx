import React, { useState, useContext } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/Auth.context'
import './LoginPage.css'

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react'

const API_URL = 'http://localhost:5005'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(undefined)

  const navigate = useNavigate()

  const { storeToken, authenticateUser } = useContext(AuthContext)

  const handleEmail = (e) => setEmail(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    const requestBody = { email, password }

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log('JWT token', response.data.authToken)

        storeToken(response.data.authToken)
        authenticateUser()
        navigate('/')
      })
      .catch((error) => {
        const errorDescription = error.response.data.message
        setErrorMessage(errorDescription)
      })
  }

  return (
    <div className="LoginPage">
      <Card color="transparent" className="my-10" shadow={false}>
        <form
          onSubmit={handleLoginSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h4" color="blue-gray" className="text-center">
              Login
            </Typography>

            <Typography variant="h6" color="blue-gray" className="text-left">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              onChange={handleEmail}
            />
            <Typography variant="h6" color="blue-gray" className="text-left">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              onChange={handlePassword}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: '-ml-2.5' }}
          />
          <Button className="mt-6" fullWidth>
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Dont have an account yet? <Link to={'/signup'}> Signup</Link>
          </Typography>
        </form>
      </Card>
    </div>
  )
}

export default LoginPage
