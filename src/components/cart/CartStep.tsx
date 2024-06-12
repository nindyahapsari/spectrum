interface CartStepProps {
  currentStep: number;
}

function CartStep({ currentStep }: CartStepProps) {
  return (
    <ul className="steps my-10 w-4/6">
      <li className={`step ${currentStep >= 0 ? 'step-info' : ''}`}>Bill</li>
      <li className={`step ${currentStep >= 1 ? 'step-info' : ''}`}>Payment</li>
      <li className={`step ${currentStep >= 2 ? 'step-info' : ''}`}>
        Confirmation
      </li>
    </ul>
  );
}

export default CartStep;
