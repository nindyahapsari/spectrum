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
  const { airlines, cities, isDataLoaded } = useContext(CodeContext);
  // console.log('airlines useFlightInfo', airlines);

  const translateAirline = (airlineCode: string) => {
    console.log('airlineCode', airlineCode, airlines);
    return airlines[airlineCode] || 'N.A';
  };

  const translateCity = (cityCode: string) => {
    return cities[cityCode] || 'N.A';
  };

  const formatFlights = (flights: Flight[]) => {
    console.log(isDataLoaded);
    if (isDataLoaded) return [];
    console.log('flights formatflight', flights);
    // if (!isDataLoaded) return [];
    return Object.keys(flights).flatMap((key) => {
      const city = translateCity(key);
      return Object.keys(flights[key]).map((flight_id) => {
        const flight = flights[key][flight_id];
        let airline;
        if (airlines.length === 0) {
          airline = translateAirline(flight.airline);
        }
        console.log('airline formatFLights', airline);
        return { city, flight_id, ...flight, airline };
      });
    });
  };

  return { formatFlights };
}

export default useFlightInfoTranslator;
