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

  // const [open, setOpen] = useState(0)

  // const handleOpen = (value) => setOpen(open === value ? 0 : value)

  const [openAcc1, setOpenAcc1] = useState(true)
  const [openAcc2, setOpenAcc2] = useState(true)
  const [openAcc3, setOpenAcc3] = useState(true)

  const [open, setOpen] = useState(0)

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur)
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur)
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur)

  const handleOpen = (value) => setOpen(open === value ? 0 : value)

  return (
    <div className="flex flex-row justify-between my-10 ">
      <div>
        {filteredResults.map((flight) => (
          <FlightCards key={flight._id} flight={flight} />
        ))}
      </div>
      <div className="mb-2 rounded-lg border border-blue-gray-100 px-4 ">
        <Accordion open={openAcc1}>
          <AccordionHeader
            className="text-sm font-bold"
            onClick={handleOpenAcc1}
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
        <Accordion open={openAcc2}>
          <AccordionHeader
            className="text-sm font-bold"
            onClick={handleOpenAcc2}
          >
            Departures times
          </AccordionHeader>
          <AccordionBody>
            <div className="px-1">
              {DepTimes.map((dep, i) => {
                return (
                  <div
                    key={i}
                    className="my-3 flex flex-col justify-start items-start"
                  >
                    <Typography>{dep.type}</Typography>
                    <Typography>{dep.time}</Typography>
                    <Slider size="sm" defaultValue={50} />
                  </div>
                )
              })}
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={openAcc3}>
          <AccordionHeader
            className="text-sm font-bold"
            onClick={handleOpenAcc3}
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
