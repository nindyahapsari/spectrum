function RoundCheckbox({ label, checked, onChange }) {
  return (
    <div className="flex items-center">
      <label className="flex items-center space-x-2" htmlFor="checkbox-input">
        <input type="checkbox" className="checkbox-round" id="checkbox-input" />
        <span className="text-gray-800">{label}</span>
      </label>
    </div>
  );
}

export default RoundCheckbox;
