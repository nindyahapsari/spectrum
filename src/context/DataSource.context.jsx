import { useState, useEffect, createContext } from 'react'
import { FLIGHTS_ALL_API  } from '../utility/endpoints'
import axios from 'axios'

const uriFlightsAll = `http://localhost:3000/api/flights/all`

const fetchAllFlights = async () => {
  const response = await axios.get(FLIGHTS_ALL_API)
  const returnedData = response.data
  return returnedData
}

const DataSourceContext = createContext(null)

const DataSourceProvider = (props) => {
  const [initFlightsData, setInitFlightData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllFlights()
      setInitFlightData(data)
    }

    fetchData()
  }, [])

  const contextValue = {
    initFlightsData,
  }

  return (
    <DataSourceContext.Provider value={contextValue}>
      {props.children}
    </DataSourceContext.Provider>
  )
}

export { DataSourceContext, DataSourceProvider }
