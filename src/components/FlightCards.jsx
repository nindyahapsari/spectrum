import { useContext } from 'react'
import { CartContext } from '../context/Cart.context'
import firstIcon from '../assets/airline-icon-first.png'
import secondIcon from '../assets/airline-icon-second.png'
import bagsIcon from '../assets/bags.png'
import ticketSlider from '../assets/ticket-slider.png'
import separator from '../assets/separator.png'

import { Rating, Progress, Button, Typography } from '@material-tailwind/react'

import './FlightCards.css'

const FlightCards = ({ flight }) => {
  const { addToCart } = useContext(CartContext)
  return (
    <div className="flight-card my-5">
      <div className="flex flex-col justify-evenly px-2">
        <div className="flex flex-row items-center">
          <img src={firstIcon} />
          <div>
            <p className="text-lg font-thin">19:50</p>
            <p className="text-sm font-thin">15 Apr</p>
            <p className="text-sm font-thin">Ber</p>
          </div>
          <div className="mx-2">
            <img src={ticketSlider} alt="slider" />
          </div>
          <div>
            <p className="text-lg font-thin">19:50</p>
            <p className="text-sm font-thin">15 Apr</p>
            <p className="text-sm font-thin">Ber</p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <img src={secondIcon} />
          <div>
            <p className="text-lg font-thin">19:50</p>
            <p className="text-sm font-thin">15 Apr</p>
            <p className="text-sm font-thin">Ber</p>
          </div>
          <div className="mx-2">
            <img src={ticketSlider} alt="slider" />
          </div>
          <div>
            <p className="text-lg font-thin">19:50</p>
            <p className="text-sm font-thin">15 Apr</p>
            <p className="text-sm font-thin">Ber</p>
          </div>
        </div>
      </div>

      <div className="mx-5">
        <img src={separator} alt="separator" />
      </div>
      <div className="flex flex-col w-1/3 ">
        <div className="mb-2 flex flex-row justify-between items-center gap-4">
          <Typography className="text-xl font-thin">Rating</Typography>
          <Rating value={4} />
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
              onClick={() => addToCart(flight._id)}
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightCards
