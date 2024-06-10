import { useState } from 'react';
import { useForm } from 'react-hook-form';
import BillingInfo from '../components/cart/BillingInfo';
import CartStep from '../components/cart/CartStep';
import PaymentInfo from '../components/cart/PaymentInfo';
import Confirmation from '../components/cart/Confirmation';
import { UserBillInfo, CardPaymentInfo } from '../@types/checkout';

interface CheckoutInfo extends UserBillInfo, CardPaymentInfo {}

function CheckoutPage() {
  const [step, setStep] = useState(0);
  const formMethods = useForm();
  const { handleSubmit } = formMethods;

  const formSteps = [
    {
      component: <BillingInfo formMethods={formMethods} />,
    },
    {
      component: <PaymentInfo formMethods={formMethods} />,
    },
    {
      component: <Confirmation formMethods={formMethods} />,
    },
  ];

  const handleNext = () => {
    if (step === formSteps.length - 1) return;
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    if (step === 0) return;
    setStep((prevStep) => prevStep - 1);
  };

  const handleConfirm = (data: CheckoutInfo) => {
    console.log('Confirm', data);
  };

  const renderButton = () => {
    if (step === formSteps.length - 1) {
      return (
        <button
          type="submit"
          className="btn btn-active btn-wide bg-spectrum-primary"
        >
          Confirm
        </button>
      );
    }
    return (
      <button
        className="btn btn-active btn-wide bg-spectrum-primary"
        onClick={handleNext}
      >
        Next
      </button>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden">
      <CartStep currentStep={step} />
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(handleConfirm)}
      >
        <div className="h-3/6 py-10">{formSteps[step].component}</div>

        <div className="my-5 card-actions flex flex-row justify-centers items-center">
          <button
            className={`btn btn-ghost btn-wide  ${step === 0 ? 'hidden' : ''}`}
            onClick={handlePrev}
          >
            Previous
          </button>
          {renderButton()}
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
