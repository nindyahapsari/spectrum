import { useState } from 'react'
import { Input, Select, Option, Button, Radio } from '@material-tailwind/react'

import DatePicker from './DatePicker'

// import { DataSourceContext } from '../context/DataSource.context'

// import DatePicker from 'react-date-picker'
import 'react-calendar/dist/Calendar.css'
import 'react-date-picker/dist/DatePicker.css'
// import RoundCheckbox from './Checkbox'

const labels = ['Return', 'One way', 'Multi City', 'Direct Flights']

const SearchBar = (props) => {
  const { destinationInput, setDestinationInput, handleSearch } = props

  const [departureInput] = useState('Berlin')

  const handleDestination = (e) => {
    setDestinationInput(e.target.value)
  }

  return (
    <div className="h-56 my-10 py-5 px-20 border border-3 rounded-lg bg-gray-300 backdrop-opacity-50">
      <div className="flex flex-row justify-between my-5">
        <div className="flex flex-row justify-between">
          <div className="mx-2">
            <Input label="From" size="lg" value={departureInput} />
          </div>
          <div>
            <Input
              label="Where to"
              size="lg"
              value={destinationInput}
              onChange={handleDestination}
            />
          </div>
        </div>

        <div className="flex flex-row mx-10">
          <DatePicker
            label="Departure"
            onChange={() => console.log('date picker 1')}
          />
          <DatePicker
            label="Return"
            onChange={() => console.log('date picker 2')}
          />
        </div>

        <div className="w-72 ">
          <Select
            size="md"
            label="Passenger"
            variant="outlined"
            onChange={() => console.log('option')}
          >
            <Option>1 Person</Option>
            <Option>2 Person</Option>
            <Option>3 Person</Option>
          </Select>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="my-5">
          {labels.map((label, i) => {
            return (
              <Radio
                key={i}
                name="type"
                label={label}
                onChange={(e) =>
                  console.log(`Value: ${e.target.value}, Label: ${label}`)
                }
              />
            )
          })}
        </div>
        <div>
          <Button
            onClick={handleSearch}
            className="mt-6 button-primary"
            size="md"
            ripple
          >
            Search Flights
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
