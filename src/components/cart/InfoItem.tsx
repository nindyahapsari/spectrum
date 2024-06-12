interface InfoItemProps {
  label: string;
  value: string;
}

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className="flex flex-row justify-between items-center my-3">
      <div className="text-sm">{label}:</div>
      <div className="text-sm">{value}</div>
    </div>
  );
}

export default InfoItem;
