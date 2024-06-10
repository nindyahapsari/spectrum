import { UseFormReturn } from 'react-hook-form';

interface PaymentInfoProps {
  formMethods: UseFormReturn;
}

function PaymentInfo({ formMethods }: PaymentInfoProps) {
  const { register } = formMethods;

  const creditCardForm = () => {
    return (
      <div className="w-full py-10 text-black">
        <div className="flex flex-col justify-center items-start">
          <label className=" my-3" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="w-full input input-bordered rounded-md my-3 "
            {...register('fullName')}
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <label className=" my-3" htmlFor="cardNumber">
            Card Number
          </label>
          <input
            className="w-full input input-bordered rounded-md flex items-center gap-2 "
            {...register('cardNumber')}
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <label className=" my-3" htmlFor="expiryDate">
            Expiry Date
          </label>
          <input
            className="w-full input input-bordered rounded-md flex items-center gap-2 "
            {...register('expiryDate')}
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <label className=" my-3" htmlFor="cvv">
            CVV
          </label>
          <input
            className="w-full input input-bordered rounded-md flex items-center gap-2 "
            {...register('cvv')}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <div className="card w-3/6 px-5 rounded-md text-neutral-content">
        <div className="w-full card-body items-center text-center">
          <h2 className="card-title my-3 text-lg text-black font-semibold">
            Payment
          </h2>
          <div role="tablist" className=" tabs tabs-bordered tabs-lg w-full">
            <input
              type="radio"
              name="creditCard"
              role="tab"
              className="tab font-semibold"
              aria-label="Credit Card"
              checked
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              {creditCardForm()}
            </div>

            <input
              type="radio"
              name="paypal"
              role="tab"
              className="tab"
              aria-label="Paypal"
              disabled
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <div className="text-center">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
