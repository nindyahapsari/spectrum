import { useContext } from 'react';
import { CodeContext } from '../context/Code.context';

/*
{
    TIP:{
       3: {
            airline:"W4"
            departure_at:"2024-07-26T21:55:00+02:00"
            return_at:"2024-08-04T09:00:00+02:00"
            expires_at:"2024-06-18T18:25:15Z"
            price:843
            flight_number:6072
       }
        
    }
}
*/

type Flight = {
  [key: string]: {
    [key: string]: {
      airline: string;
      departure_at: string;
      return_at: string;
      expires_at: string;
      price: number;
      flight_number: number;
    };
  };
};

function useFlightInfoTranslator() {
  const { airlines, cities } = useContext(CodeContext);

  const translateAirline = (airlineCode: string) => {
    return airlines.reduce((acc, airline) => {
      return Object.keys(airline).includes(airlineCode)
        ? airline[airlineCode]
        : acc;
    }, 'N.A');
  };

  const translateCity = (cityCode: string) => {
    return cities.reduce((acc, city) => {
      return Object.keys(city).includes(cityCode) ? city[cityCode] : acc;
    }, 'N.A');
  };

  const cheapestFlight = (flights: Flight[]) => {
    return Object.keys(flights).flatMap((key) => {
      const city = translateCity(key);
      return Object.keys(flights[key]).map((flight_id) => {
        const flight = flights[key][flight_id];
        const airline = translateAirline(flight.airline);
        console.log('airline', airline);
        return { city, flight_id, ...flight, airline };
      });
    });
  };

  return { cheapestFlight };
}

export default useFlightInfoTranslator;
