/*
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, UseFormReturn } from 'react-hook-form';
import BillingInfo from '../components/cart/BillingInfo';
import CartStep from '../components/cart/CartStep';
import PaymentInfo from '../components/cart/PaymentInfo';
import Confirmation from '../components/cart/Confirmation';
import {
  CartContextType,
  CheckoutInfoType,
  CardPaymentInfo,
  UserBillInfo,
} from '../types';
import { CartContext } from '../context/Cart.context';
import {
  userBillSchema,
  cardPaymentSchema,
} from '../components/cart/validationSchema';

function CheckoutPage() {
  const [step, setStep] = useState(0);
  const { addCheckoutInfo, clearCart } = useContext(
    CartContext
  ) as CartContextType;

  const navigate = useNavigate();

  const billingFormMethods = useForm<UserBillInfo>({
    resolver: yupResolver(userBillSchema),
  });

  const paymentFormMethods = useForm<CardPaymentInfo>({
    resolver: yupResolver(cardPaymentSchema),
  });

  const formMethods = [billingFormMethods, paymentFormMethods];

  const formSteps = [
    {
      component: (
        <BillingInfo
          formMethods={billingFormMethods as UseFormReturn<UserBillInfo>}
        />
      ),
    },
    {
      component: (
        <PaymentInfo
          formMethods={paymentFormMethods as UseFormReturn<CardPaymentInfo>}
        />
      ),
    },
    {
      component: <Confirmation />,
    },
  ];

  const handleNext = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (step === formSteps.length - 1) return;

    const isValid = await formMethods[step].trigger();
    if (isValid) {
      const data = formMethods[step].getValues();
      addCheckoutInfo(data as CheckoutInfoType);
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    if (step === 0) return;
    setStep((prevStep) => prevStep - 1);
  };

  const handleConfirm = () => {
    clearCart();
    navigate('/success');
  };

  const renderButton = () => {
    if (step === formSteps.length - 1) {
      return (
        <button
          type="submit"
          className="btn btn-active btn-wide bg-spectrum-primary border-none"
        >
          Confirm
        </button>
      );
    }
    return (
      <button
        className="btn btn-active btn-wide bg-spectrum-primary border-none"
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
        onSubmit={handleConfirm}
      >
        <div className="h-3/6 py-3">{formSteps[step].component}</div>

        <div className="my-10 card-actions flex flex-row justify-centers items-center">
          <button
            className={`btn btn-ghost btn-wide   ${step === 0 ? 'hidden' : ''}`}
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
*/
