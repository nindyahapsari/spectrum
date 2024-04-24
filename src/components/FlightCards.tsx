import { useContext } from 'react';
import { Rating, Button, Typography } from '@material-tailwind/react';
import { CartContext } from '../context/Cart.context';
import firstIcon from '../assets/airline-icon-first.png';
import secondIcon from '../assets/airline-icon-second.png';
import bagsIcon from '../assets/bags.png';
import separator from '../assets/separator.png';

import './FlightCards.css';
import TicketFlightInfo from './TicketFlightInfo';

function FlightCards({ flight, setIsLoading, setIsSuccess, setErrorMessage }) {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (id) => {
        try {
            setIsLoading(true);
            addToCart(id);
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 3000);
            setIsLoading(false);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="flight-card my-5">
            <div className="flex flex-col justify-evenly px-2">
                <TicketFlightInfo
                    icon={firstIcon}
                    depTimestamp={flight.departureTime}
                    arrivalTimestamp={flight.arrivalTime}
                    depCity="Berlin"
                    destination={flight.destination}
                />
                <TicketFlightInfo
                    icon={secondIcon}
                    depTimestamp={flight.arrivalTime}
                    arrivalTimestamp={flight.departureTime}
                    depCity={flight.destination}
                    destination="Berlin"
                />
            </div>

            <div className="mx-5">
                <img src={separator} alt="separator" />
            </div>
            <div className="flex flex-col w-1/3 ">
                <div className="mb-2 flex flex-row justify-between items-center gap-4">
                    <Typography className="text-xl font-thin">Rating</Typography>
                    <Rating value={5} readonly />
                </div>
                <div className="my-8 flex justify-center">
                    <img src={bagsIcon} alt="bags" />
                </div>
                <div className="flex flex-row justify-between items-end ">
                    <div className="text-3xl font-semibold ">${flight.price}</div>
                    <div className="">
                        <Button
                            size="lg"
                            className="button-primary"
                            onClick={() => handleAddToCart(flight._id)}
                        >
              View Details
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlightCards;
