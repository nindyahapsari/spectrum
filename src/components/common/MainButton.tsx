import { Button } from 'react-daisyui';

interface MainButtonProps {
  buttonText: string;
  type?: 'submit';
  customClass?: string;
}

function MainButton({ buttonText, customClass }: MainButtonProps) {
  return (
    <Button
      className={`${customClass} bg-spectrum-primary px-2 py-3 rounded-md text-black`}
    >
      {buttonText}
    </Button>
  );
}

export default MainButton;
