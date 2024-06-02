import React, { useState } from 'react';
import FlightCards from './FlightCards';
import { Flight } from '../../types';

// const STOPS = ['Direct', '1 Stop', '2+ Stops'];
// const DepTimes = [
//   { type: 'Outbound', time: '12:00 AM - 11:59 PM' },
//   { type: 'Return', time: '12:00 AM - 11:59 PM' },
// ];
// const RATINGS = [
//   'Food',
//   'Service',
//   'Cleanliness',
//   'Seat Space',
//   'Security Check',
// ];

type FlightsProps = {
  filteredResults: Flight[];
};

function Flights(props: FlightsProps) {
  const { filteredResults } = props;

  // const [open, setOpen] = useState(0)

  // const handleOpen = (value) => setOpen(open === value ? 0 : value)

  const [setIsLoading] = useState(false);
  const [setIsSuccess] = useState(false);
  const [setErrorMessage] = useState('');

  return (
    <div>
      <div className="flex flex-row justify-between my-10 ">
        <div>
          {filteredResults.map((flight) => (
            <FlightCards
              key={flight._id}
              flight={flight}
              setIsLoading={setIsLoading}
              setIsSuccess={setIsSuccess}
              setErrorMessage={setErrorMessage}
            />
          ))}
        </div>
        <div className="mx-20 mb-2 rounded-lg border border-blue-gray-100 px-4 ">
          <div>Filter functions</div>
        </div>
      </div>
    </div>
  );
}

export default Flights;
