import bagsIcon from '../../assets/bags.png';
import separator from '../../assets/separator.png';

import { Button } from 'react-daisyui';
import './FlightCards.css';
import TicketFlightInfo from './TicketFlightInfo';
import { CheapestFlightFormated } from '../../types';

type FlightCardsProps = {
  flight: Partial<CheapestFlightFormated>;
};

function FlightCards({ flight }: FlightCardsProps) {
  const formatDateTime = (datetime: string) => {
    const date = new Date(datetime);
    return date.toLocaleString();
  };

  const { departure_at, return_at, city, flight_number, airline, price } =
    flight;

  return (
    <div className="flight-card flex flex-row justify-between my-5">
      <div className="flex flex-col justify-evenly px-2">
        <TicketFlightInfo
          depTimestamp={formatDateTime(departure_at ?? '')}
          returnTimestamp={formatDateTime(return_at ?? '')}
          city={city ?? 'N.A'}
          flightNumber={flight_number?.toString() ?? 'N.A'}
          airline={airline ?? 'N.A'}
        />
      </div>

      <div className="mx-5">
        <img src={separator} alt="separator" />
      </div>
      <div className="flex flex-col w-2/6">
        <div className="mb-2 flex flex-row justify-between items-center gap-4"></div>
        <div className="my-8 flex justify-center">
          <img src={bagsIcon} alt="bags" />
        </div>
        <div className="flex flex-row justify-around items-end">
          <div className="text-3xl font-semibold ">€{price}</div>
          <div className="">
            <Button className="button-primary py-2 px-4 rounded-lg">
              Save Flight
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightCards;
