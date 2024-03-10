import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

const URL = 'http://localhost:3000'

const AuthContext = createContext()

function AuthProviderWrapper({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)

  const navigate = useNavigate()

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

  const updateUser = (updatedUser) => {
    setUser(updatedUser)
  }

  useEffect(() => {
    authenticateUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        updateUser,
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

export { AuthProviderWrapper, AuthContext }
