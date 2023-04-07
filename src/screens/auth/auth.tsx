import React, { useState } from 'react';

import { Alert } from 'react-native';
import { Formik } from 'formik';

import CustomButton from '@components/atoms/CustomButton/CustomButton';
import CustomInput from '@components/atoms/CustomInput/CustomInput';
import { HideKeyboard } from '@components/atoms/CustomInput/HideKeyboard/HideKeyboard';
import { Icon } from '@components/atoms/Icon';
import Spacer from '@components/atoms/Spacer/Spacer';

import * as Styled from './auth.styled';
import { ILoginValues } from './auth.types';

const Auth: React.FC = () => {
  const initialValues: ILoginValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values: ILoginValues) => {
    createAlert(values);
  };

  const createAlert = (values: ILoginValues) => {
    Alert.alert('Alert', values.email, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleChange, handleSubmit, values }) => (
        <HideKeyboard>
          <Styled.Container>
            <Icon type="logo" />
            <Spacer size={50} />
            <CustomInput
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder="Email"
              type="email"
              isAnimated={true}
            />
            <Spacer size={20} />
            <CustomInput
              value={values.password}
              onChangeText={handleChange('password')}
              placeholder="Password"
              type="password"
              isAnimated={true}
            />
            <Spacer size={20} />
            <CustomButton type={'default'} onPress={handleSubmit}>
              SUBMIT
            </CustomButton>
            <CustomButton type={'cancel'} onPress={() => console.log('123')}>
              SKIP
            </CustomButton>
          </Styled.Container>
        </HideKeyboard>
      )}
    </Formik>
  );
};

export default Auth;
