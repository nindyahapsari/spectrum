import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
const URL = 'http://localhost:5005'

const AuthContext = createContext()

function AuthProviderWrapper({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)

  const storeToken = (token) => {
    localStorage.setItem('authToken', token)
  }

  const authenticateUser = () => {
    const storedToken = localStorage.getItem('authToken')

    if (storedToken) {
      console.log('axios is working')
      axios
        .get(`${URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          const user = response.data
          setIsLoggedIn(true)
          setIsLoading(false)
          setUser(user)
        })
        .catch(() => {
          setIsLoggedIn(false)
          setIsLoading(false)
          setUser(null)
        })
    } else {
      setIsLoggedIn(false)
      setIsLoading(false)
      setUser(null)
    }
  }

  const removeToken = () => {
    localStorage.removeItem('authToken')
  }

  const logOutUser = () => {
    removeToken()
    authenticateUser()
  }

  useEffect(() => {
    authenticateUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProviderWrapper.propTypes = {
  children: PropTypes.node,
}

export { AuthProviderWrapper, AuthContext }
