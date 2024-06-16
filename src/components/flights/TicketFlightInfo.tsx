import Time from '../../utils/time';

type TicketFlightInfoProps = {
  depTimestamp: string;
  depCity: string;
  destination: string;
};

function TicketFlightInfo(props: TicketFlightInfoProps) {
  const { depTimestamp, depCity, destination } = props;

  const depTime = Time.getTime(depTimestamp);
  const depDate = Time.getDate(depTimestamp);

  return (
    <div>
      <div className="flex flex-row items-center">
        <div className="w-24">
          <p className="text-3xl font-bold">{depCity}</p>
        </div>
        <div className="mx-2">
          <p className="text-lg font-thin">{depTime}</p>
          <p className="text-sm font-semibold">{depDate}</p>
        </div>
        <div className="w-24">
          <p className="text-3xl font-bold">{destination}</p>
        </div>
      </div>
    </div>
  );
}

export default TicketFlightInfo;
