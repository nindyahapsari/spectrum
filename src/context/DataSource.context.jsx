import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const uriFlightsAll = `http://localhost:5005/api/flights/all`

const fetchAllFlights = async () => {
  const response = await axios.get(uriFlightsAll)
  const returnedData = response.data
  return returnedData
}

const DataSourceContext = createContext(null)

const DataSourceProvider = (props) => {
  const [initFlightsData, setInitFlightData] = useState([])

  useEffect(() => {
    setInitFlightData(fetchAllFlights())
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
