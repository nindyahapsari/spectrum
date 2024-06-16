import { UseFormReturn } from 'react-hook-form';
import InputField from '../common/InputField';
import { CardPaymentInfo } from '../../types';

interface PaymentInfoProps {
  formMethods: UseFormReturn<CardPaymentInfo>;
}

function PaymentInfo({ formMethods }: PaymentInfoProps) {
  const {
    register,
    formState: { errors },
  } = formMethods;

  const creditCardForm = () => {
    return (
      <div className="w-full py-10 text-black">
        <div className="w-full flex flex-col justify-center items-start">
          <InputField<CardPaymentInfo>
            label="Full Name"
            name="fullName"
            register={register}
            error={errors.fullName?.message}
          />

          <InputField<CardPaymentInfo>
            label="Card Number"
            name="cardNumber"
            register={register}
            error={errors.cardNumber?.message}
          />

          <InputField<CardPaymentInfo>
            label="Expiry Date"
            name="expiryDate"
            register={register}
            error={errors.expiryDate?.message}
          />

          <InputField<CardPaymentInfo>
            label="CVV"
            name="cvv"
            register={register}
            error={errors.cvv?.message}
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
              readOnly
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
