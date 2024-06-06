import React from 'react';
import FlightCards from './FlightCards';
import { Flight } from '../../types';

import { Button } from 'react-daisyui';

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

  return (
    <div>
      <div className="flex flex-row justify-between my-10 ">
        <div>
          {filteredResults.map((flight) => (
            <div key={flight._id} className="flex flex-row items-center">
              <FlightCards flight={flight} />
              <Button className="mx-3 h-2 w-4 text-4xl" variant="outline">
                +
              </Button>
            </div>
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
