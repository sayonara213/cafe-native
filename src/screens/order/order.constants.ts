import { theme } from '@theme/theme';
import { StyleSheet } from 'react-native';

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    fontFamily: theme.fontFamily.medium,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: theme.colors.secondary,
  },
  viewContainer: {
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: theme.colors.borderNotActive,
  },
});

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
