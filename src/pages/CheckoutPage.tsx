import { useState, useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import BillingInfo from '../components/cart/BillingInfo';
import CartStep from '../components/cart/CartStep';
import PaymentInfo from '../components/cart/PaymentInfo';
import Confirmation from '../components/cart/Confirmation';
import { UserBillInfo, CardPaymentInfo } from '../@types/checkout';
import { CartContextType } from '../@types/cartContext';
import { CartContext } from '../context/Cart.context';
import * as yup from 'yup';

interface CheckoutInfo extends UserBillInfo, CardPaymentInfo {}

const CheckoutSchema = yup.object({
  firstName: yup
    .string()
    .required('First Name is required')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
  lastName: yup
    .string()
    .required('Last Name is required')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
  email: yup.string().email('Invalid email').required('Email is required'),
  userName: yup.string().required('User Name is required'),
});

const PaymentSchema = yup.object({
  cardNumber: yup
    .string()
    .required('Card Number is required')
    .length(16, 'Card Number should be exactly 16 digits'),
  expiryDate: yup
    .string()
    .required('Expiry Date is required')
    .matches(
      /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
      'Expiry Date should be in the format MM/YY or MM/YYYY'
    ),
});

function CheckoutPage() {
  const [step, setStep] = useState(0);
  const checkoutSchema = step === 0 ? CheckoutSchema : PaymentSchema;
  const formMethods = useForm({
    resolver: yupResolver(checkoutSchema),
  });
  const { handleSubmit } = formMethods;

  const { addCheckoutInfo } = useContext(CartContext) as CartContextType;

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

  const handleNext = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (step === formSteps.length - 1) return;

    const isValid = await formMethods.trigger();
    if (isValid) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    if (step === 0) return;
    setStep((prevStep) => prevStep - 1);
  };

  const handleConfirm = (data: CheckoutInfo) => {
    console.log('Confirm', data);
    addCheckoutInfo(data);
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
        onSubmit={handleSubmit(handleConfirm)}
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
