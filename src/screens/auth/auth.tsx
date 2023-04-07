import React, { useState } from 'react';

import { Formik } from 'formik';

import CustomButton from '@components/atoms/CustomButton/CustomButton';
import CustomInput from '@components/atoms/CustomInput/CustomInput';
import { HideKeyboard } from '@components/atoms/CustomInput/HideKeyboard/HideKeyboard';
import { Icon } from '@components/atoms/Icon';
import Spacer from '@components/atoms/Spacer/Spacer';

import * as Styled from './auth.styled';

const Auth: React.FC = () => {
  const [text, setText] = useState<string>('');

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = () => {
    console.log('submit');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <HideKeyboard>
          <Styled.Container>
            <Icon type="logo" />
            <Spacer size={50} />
            <CustomInput
              value={values.email}
              onChangeText={handleChange}
              placeholder="Email"
              type="email"
              isAnimated={true}
            />
            <Spacer size={20} />
            <CustomInput
              value={values.password}
              onChangeText={handleChange}
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
