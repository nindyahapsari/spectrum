import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

import { BASE_URL } from '../utility/endpoints'

const AuthContext = createContext()

function AuthProviderWrapper({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    authenticateUser()
  }, [])

  const storeToken = (token) => {
    localStorage.setItem('authToken', token)
  }

  const getToken = () => {
    const storedToken = localStorage.getItem('authToken')
    return storedToken
  }

  function authenticateUser() {
    const storedToken = localStorage.getItem('authToken')

    if (storedToken && !user) {
      axios
        .get(`${BASE_URL}/auth/verify`, {
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

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        setUser,
        storeToken,
        getToken,
        authenticateUser,
        logOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext }
