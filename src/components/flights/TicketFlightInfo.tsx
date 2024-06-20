import Time from '../../utils/time';

type TicketFlightInfoProps = {
  depTimestamp: string;
  returnTimestamp: string;
  city: string;
  flightNumber: string;
  airline: string;
};

function TicketFlightInfo(props: TicketFlightInfoProps) {
  const { depTimestamp, returnTimestamp, city, flightNumber, airline } = props;

  const depTime = Time.getTime(depTimestamp);
  const depDate = Time.getDate(depTimestamp);
  const returnTime = Time.getTime(returnTimestamp);
  const returnDate = Time.getDate(returnTimestamp);

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-full my-5">
          <p className="text-3xl font-bold">{airline}</p>
        </div>
        <div className="w-full text-lg font-thin">
          <p className="">City of destination: {city}</p>
          <p className="">
            Departure: {depDate} - {depTime}
          </p>
          <p className="">
            Return: {returnDate} - {returnTime}
          </p>
          <p className="">Flight number: {flightNumber}</p>
        </div>
      </div>
    </div>
  );
}

export default TicketFlightInfo;
