import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

interface DatePickerProps {
  label: string;
}

export default function DatePicker(props: DatePickerProps) {
  const { label } = props;
  const [date, setDate] = useState<Date | undefined>();
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (selectedDate: Date) => {
    setDate(selectedDate);
    setShowPicker(false);
  };

  return (
    <div>
      <label>
        {label}
        <input
          type="text"
          readOnly
          value={date ? format(date, 'PPP') : ''}
          onClick={() => setShowPicker(!showPicker)}
        />
      </label>
      {showPicker && (
        <div>
          <DayPicker selected={date} onDayClick={handleDateChange} />
        </div>
      )}
    </div>
  );
}
