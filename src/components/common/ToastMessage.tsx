import { Toast, Alert } from 'react-daisyui';

interface ToastMessageProps {
  message: string;
}

function ToastMessage({ message }: ToastMessageProps) {
  return (
    <Toast
      // className={`${compareTickets.length === 2 ? 'block' : 'hidden'}`}
      vertical="bottom"
      horizontal="end"
    >
      <Alert className="bg-blue-300 p-5">{message}</Alert>
    </Toast>
  );
}

export default ToastMessage;
