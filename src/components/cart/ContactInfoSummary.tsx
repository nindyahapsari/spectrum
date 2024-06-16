import InfoItem from './InfoItem';
import { UserBillInfo } from '../../types';

interface ContactInfoSummaryProps {
  bill: UserBillInfo;
}

function ContactInfoSummary({ bill }: ContactInfoSummaryProps) {
  const { firstName, lastName, email, userName } = bill;
  return (
    <div className="mb-10">
      <div className="text-lg font-semibold my-5">Contact Info</div>
      <InfoItem label="Full Name" value={`${firstName} ${lastName}`} />
      <InfoItem label="Email" value={email} />
      <InfoItem label="User Name" value={userName} />
    </div>
  );
}

export default ContactInfoSummary;
