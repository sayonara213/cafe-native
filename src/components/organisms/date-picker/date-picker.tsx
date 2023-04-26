import React, { useState } from 'react';

import * as Styled from './date-picker.styled';
import { DatePickerProps } from './date-picker.types';
import { theme } from '@theme/theme';
import CustomButton from '@components/atoms/CustomButton/CustomButton';
import { Calendar, DateData } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';

export const calendarStyle = {
  backgroundColor: theme.colors.primary,
  calendarBackground: theme.colors.primary,
  textSectionTitleColor: '#b6c1cd',
  selectedDayBackgroundColor: theme.colors.purple,
  selectedDayTextColor: theme.colors.primary,
  todayTextColor: theme.colors.purple,
  dayTextColor: '#2d4150',
  arrowColor: theme.colors.purple,
};

const INITIAL_DATE = new Date().toDateString();

const CustomDatePicker: React.FC<DatePickerProps> = ({ date, onDateChange }) => {
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (dateData: DateData) => {
    onDateChange(new Date(dateData.timestamp));
  };

  const handleTimeChange = (event: any, selectedTime: any) => {
    if (selectedTime) {
      onDateChange(selectedTime);
    }
    setShowTimePicker(false);
  };

  const handleShowTimePicker = () => {
    setShowTimePicker(true);
  };

  return (
    <Styled.DatePickerContainer>
      <Calendar
        enableSwipeMonths
        initialDate={INITIAL_DATE}
        minDate={INITIAL_DATE}
        markedDates={{
          [date.toISOString().slice(0, 10)]: { selected: true },
        }}
        onDayPress={handleDateChange}
        theme={calendarStyle}
      />
      <CustomButton onPress={handleShowTimePicker}>
        {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </CustomButton>
      {showTimePicker && (
        <DateTimePicker
          value={date}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={handleTimeChange}
        />
      )}
    </Styled.DatePickerContainer>
  );
};

export default CustomDatePicker;
