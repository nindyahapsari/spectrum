/*
import { useContext } from 'react';

import { CartContext } from '../../context/Cart.context';
import { CartContextType } from '../../types';
import ContactInfoSummary from './ContactInfoSummary';
import PaymentInfoSummary from './PaymentInfoSummary';

function Confirmation() {
  const { getCartItems, getTotalCartAmount, checkoutInfo } = useContext(
    CartContext
  ) as CartContextType;

  const bill = {
    firstName: checkoutInfo.firstName,
    lastName: checkoutInfo.lastName,
    email: checkoutInfo.email,
    userName: checkoutInfo.userName,
  };

  const payment = {
    fullName: checkoutInfo.fullName,
    cardNumber: checkoutInfo.cardNumber,
    expiryDate: checkoutInfo.expiryDate,
    cvv: checkoutInfo.cvv,
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <div className="card w-5/6 px-5 rounded-md  text-black">
        <div className="card-body w-full items-center text-center">
          <h2 className="card-title my-3 text-lg font-semibold">
            Your booking summary
          </h2>

          <div className="w-full h-full flex flex-row justify-center">
            <div className="flex flex-col w-4/6 mx-3">
              {getCartItems().map((flight) => (
                <div key={flight._id} className="border border-black mb-5 p-2">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                      <div>
                        <p className="text-sm my-3">
                          {flight.airline} - {flight.flight_number}
                        </p>
                        <p className="text-sm my-3">
                          Departure:{' '}
                          {new Date(flight.departure_at).toLocaleString()}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm my-3">
                          Destination: {flight.destination}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row justify-end items-end">
                      <p className="px-5 text-xl font-semibold">
                        Price: ${flight.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-2/6 p-3 border border-black">
              <div className="mb-10">
                <ContactInfoSummary bill={bill} />
              </div>

              <div className="divider"></div>

              <div className="mt-10">
                <PaymentInfoSummary payment={payment} />
              </div>
              <div className="text-2xl font-semibold text-right mt-2">
                Total: ${getTotalCartAmount()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
*/
