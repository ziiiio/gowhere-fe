import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Dayjs } from 'dayjs';

// Credits: https://mui.com/x/react-date-pickers/date-time-picker/

interface IBasicDateTimePickerProps {
  selectedDateTime: Dayjs | null;
  handleDateChange: (value: Dayjs | null) => void;
}

export default function BasicDateTimePicker({
  selectedDateTime,
  handleDateChange,
}: IBasicDateTimePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker
          label="Basic date time picker"
          value={selectedDateTime}
          onChange={handleDateChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
