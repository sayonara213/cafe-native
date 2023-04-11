import React from 'react';
import CustomButton from '@components/atoms/CustomButton/CustomButton';
import CustomText from '@components/atoms/CustomText/CustomText';
import { useAppDispatch } from '@services/hooks/redux.hook';
import { logOut } from '@services/store/user';
import { View } from 'react-native';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(logOut());
  };

  return (
    <View>
      <CustomText>Test</CustomText>
      <CustomButton onPress={logout}>Log Out</CustomButton>
    </View>
  );
};

export default Main;
