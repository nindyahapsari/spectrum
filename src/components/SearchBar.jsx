import { useState, useEffect } from 'react'
import axios from 'axios'
import './SearchBar.css'
import Flights from '../Pages/FlightsPage'

const URL = 'http://localhost:5005'

// const SearchBar = () => {
//   const [input, setInput] = useState('')
//   const [selectedCategory, setSelectedCategory] = useState('All')
//   const [resultsFromFlightsAll, setresultsFromFlightsAll] = useState([])

//   const fetchFlight = () => {
//     axios
//       .get(`${URL}/api/flights/all`)
//       .then((response) => {
//         // setresultsFromFlightsAll(response.data)
//         console.log('Response =>', response)
//       })
//       .catch((error) => {
//         console.log('Error =>', error)
//       })
//   }

//   useEffect(() => {
//     const runTheFunction = setTimeout(() => {
//       fetchFlight()
//     }, 500)

//     return () => {
//       clearTimeout(runTheFunction)
//     }
//   }, [])

//   const handleSearch = () => {
//     if (resultsFromFlightsAll.length) {
//       const filteredResults = filterData(resultsFromFlightsAll)

//       setresultsFromFlightsAll(filteredResults)
//     }
//   }
//   const filterData = (apiData) => {
//     try {
//       return apiData.filter(
//         (item) =>
//           (item.airline?.toLowerCase() ?? '').includes(input.toLowerCase()) &&
//           (selectedCategory === 'All' || item.destination === selectedCategory),
//       )
//     } catch (error) {
//       console.error('Error filtering data:', error)
//       return []
//     }
//   }
//   console.log('Search input =>', input)
//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value)
//   }

//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         placeholder="Where to?"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         className="search-input"
//       />
//       <select
//         value={selectedCategory}
//         onChange={handleCategoryChange}
//         className="category-dropdown"
//       >
//         <option value="All">All Categories</option>
//       </select>
//       <button onClick={handleSearch} className="search-button">
//         Search
//       </button>
//       {resultsFromFlightsAll.length > 0 ? (
//         <div>
//           {resultsFromFlightsAll.map((flights, index) => (
//             <Flights key={`${flights.destination}-${index}`} {...flights} />
//           ))}
//         </div>
//       ) : (
//         <div className="no-results-message">No results found.</div>
//       )}
//     </div>
//   )
// }

// export default SearchBar

const SearchBar = () => {
  const [input, setInput] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [resultsFromFlightsAll, setResultsFromFlightsAll] = useState([])
  const [filteredResults, setFilteredResults] = useState([])

  useEffect(() => {
    fetchFlight()
  }, [])

  const fetchFlight = () => {
    axios
      .get(`${URL}/api/flights/all`)
      .then((response) => {
        console.log('Response =>', response)
        setResultsFromFlightsAll(response.data)
      })
      .catch((error) => {
        console.log('Error =>', error)
      })
  }

  const handleSearch = () => {
    if (resultsFromFlightsAll.length > 0) {
      const filteredResults = filterData(resultsFromFlightsAll)
      setFilteredResults(filteredResults)
    }
  }

  const filterData = (apiData) => {
    try {
      return apiData.filter(
        (item) =>
          (item.airline?.toLowerCase() ?? '').includes(input.toLowerCase()) &&
          (selectedCategory === 'All' || item.destination === selectedCategory),
      )
    } catch (error) {
      console.error('Error filtering data:', error)
      return []
    }
  }

  console.log('Search input =>', input)

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  console.log('Filtered results =>', filteredResults)
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Where to?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
      />
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="category-dropdown"
      >
        <option value="All">All Categories</option>
      </select>
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
      {filteredResults.length > 0 ? (
        <div>
          {filteredResults.map((flights, index) => (
            <Flights key={`${flights.destination}-${index}`} {...flights} />
          ))}
        </div>
      ) : (
        <div className="no-results-message">No results found.</div>
      )}
    </div>
  )
}

export default SearchBar
