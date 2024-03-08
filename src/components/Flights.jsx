import { useState, useContext } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Checkbox,
  Typography,
  Slider,
} from '@material-tailwind/react'

import { DataSourceContext } from '../context/DataSource.context'
import SearchBar from './SearchBar'
import FlightCards from './FlightCards'

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
}

const STOPS = ['Direct', '1 Stop', '2+ Stops']
const DepTimes = [
  { type: 'Outbound', time: '12:00 AM - 11:59 PM' },
  { type: 'Return', time: '12:00 AM - 11:59 PM' },
]
const RATINGS = [
  'Food',
  'Service',
  'Cleanliness',
  'Seat Space',
  'Security Check',
]
const AIRLINES = [
  'Qatar',
  'Egyptair',
  'LOT',
  'Brussel airline',
  'Austrian airlines',
]

const Flights = (props) => {
  const { filteredResults } = props

  const [open, setOpen] = useState(0)

  const handleOpen = (value) => setOpen(open === value ? 0 : value)

  return (
    <div className="flex flex-row justify-between my-10 border-2 border-red-700">
      <div>
        {filteredResults.map((flight) => (
          <FlightCards key={flight._id} flight={flight} />
        ))}
      </div>
      <div className="px-30 ml-5 border-2 border-red-500">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            className="text-sm font-bold"
            onClick={() => handleOpen(1)}
          >
            Stops
          </AccordionHeader>
          <AccordionBody>
            <div className="flex flex-col">
              {STOPS.map((stopOption, i) => (
                <Checkbox key={i} label={stopOption} />
              ))}
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            className="text-sm font-bold"
            onClick={() => handleOpen(2)}
          >
            Departures times
          </AccordionHeader>
          <AccordionBody>
            <div className="px-2">
              {DepTimes.map((dep, i) => {
                return (
                  <div key={i} className='my-3'>
                    <Typography>{dep.type}</Typography>
                    <Typography>{dep.time}</Typography>
                    <Slider size="sm" defaultValue={50} />
                  </div>
                )
              })}
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            className="text-sm font-bold"
            onClick={() => handleOpen(3)}
          >
            Rating
          </AccordionHeader>
          <AccordionBody>
            <div className="flex flex-col">
              {RATINGS.map((rating, i) => (
                <Checkbox key={i} label={rating} />
              ))}
            </div>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  )
}

export default Flights
