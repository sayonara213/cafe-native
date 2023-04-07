import React, { PropsWithChildren } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export const HideKeyboard: React.FC<PropsWithChildren> = ({ children }) => {
  const handleHideKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleHideKeyboard}>{children}</TouchableWithoutFeedback>
  );
};
