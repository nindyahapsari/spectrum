import { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Checkbox,
  Typography,
  Slider,
  Alert,
} from '@material-tailwind/react';

import FlightCards from './FlightCards';

const STOPS = ['Direct', '1 Stop', '2+ Stops'];
const DepTimes = [
  { type: 'Outbound', time: '12:00 AM - 11:59 PM' },
  { type: 'Return', time: '12:00 AM - 11:59 PM' },
];
const RATINGS = [
  'Food',
  'Service',
  'Cleanliness',
  'Seat Space',
  'Security Check',
];

function Flights(props) {
    const { filteredResults } = props;

    // const [open, setOpen] = useState(0)

    // const handleOpen = (value) => setOpen(open === value ? 0 : value)

    const [openAcc1, setOpenAcc1] = useState(true);
    const [openAcc2, setOpenAcc2] = useState(true);
    const [openAcc3, setOpenAcc3] = useState(true);

    const [setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [setErrorMessage] = useState('');

    const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
    const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
    const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);

    return (
        <div>
            {isSuccess && (
                <Alert color="green" onClose={() => setIsSuccess(false)}>
          Added to cart
                </Alert>
            )}

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
                    <Accordion open={openAcc1}>
                        <AccordionHeader
                            className="text-sm font-bold"
                            onClick={handleOpenAcc1}
                        >
              Stops
                        </AccordionHeader>
                        <AccordionBody>
                            <div className="flex flex-col">
                                {STOPS.map((stopOption, i) => (
                                    <Checkbox key={i} label={stopOption} />
                                ))}
                            </div>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={openAcc2}>
                        <AccordionHeader
                            className="text-sm font-bold"
                            onClick={handleOpenAcc2}
                        >
              Departures times
                        </AccordionHeader>
                        <AccordionBody>
                            <div className="px-1">
                                {DepTimes.map((dep, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="my-3 flex flex-col justify-start items-"
                                        >
                                            <Typography className="pr-20">{dep.type}</Typography>
                                            <Typography>{dep.time}</Typography>
                                            <div>
                                                <Slider size="sm" defaultValue={50} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={openAcc3}>
                        <AccordionHeader
                            className="text-sm font-bold"
                            onClick={handleOpenAcc3}
                        >
              Rating
                        </AccordionHeader>
                        <AccordionBody>
                            <div className="flex flex-col">
                                {RATINGS.map((rating, i) => (
                                    <Checkbox key={i} label={rating} />
                                ))}
                            </div>
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default Flights;
