import React from 'react';
import Time from '../utility/time';

import ticketSlider from '../assets/ticket-slider.png';

interface TicketFlightInfoProps {
  icon: string;
  depTimestamp: string;
  arrivalTimestamp: string;
  depCity: string;
  destination: string;
}

function TicketFlightInfo(props: TicketFlightInfoProps) {
  const { icon, depTimestamp, arrivalTimestamp, depCity, destination } = props;

  const depTime = Time.getTime(depTimestamp);
  const depDate = Time.getDate(depTimestamp);

  const arrivalTime = Time.getTime(arrivalTimestamp);
  const arrivalDate = Time.getDate(arrivalTimestamp);

  return (
    <div>
      <div className="flex flex-row items-center">
        <img src={icon} />
        <div className="w-24">
          <p className="text-lg font-thin">{depTime}</p>
          <p className="text-sm font-thin">{depDate}</p>
          <p className="text-sm font-thin">{depCity}</p>
        </div>
        <div className="mx-2">
          <img src={ticketSlider} alt="slider" />
        </div>
        <div className="w-24">
          <p className="text-lg font-thin">{arrivalTime}</p>
          <p className="text-sm font-thin">{arrivalDate}</p>
          <p className="text-sm font-thin">{destination}</p>
        </div>
      </div>
    </div>
  );
}

export default TicketFlightInfo;
