import React from 'react';

import { Formik } from 'formik';

import CustomButton from '@components/atoms/CustomButton/CustomButton';
import CustomInput from '@components/atoms/CustomInput/CustomInput';
import { HideKeyboard } from '@components/atoms/CustomInput/HideKeyboard/HideKeyboard';
import Spacer from '@components/atoms/Spacer/Spacer';

import * as Styled from '@screens/auth/auth.styled';
import CustomText from '@components/atoms/CustomText/CustomText';
import { useNavigation } from '@react-navigation/native';
import { putRequest } from '@services/api.service';
import { useAppDispatch, useAppSelector } from '@services/hooks/redux.hook';
import { addInfo } from '@services/store/user';
import { API_ROUTES } from '@constants/config';
import { IAdditionalValues } from '@screens/auth/auth.types';
import { additionalValidationSchema } from '@screens/auth/validation/validation';
import { APP_ROUTES } from '@constants/routes';

const inputs = ['username', 'phone'];

const additionalInitialValues: IAdditionalValues = {
  username: '',
  phone: '',
};

const AuthAdditional: React.FC = () => {
  const { navigate } = useNavigation();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const addAdditionalInfo = async (values: IAdditionalValues) => {
    try {
      return await putRequest(`${API_ROUTES.auth.additional}/${user.id}`, values);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (values: IAdditionalValues) => {
    const additinalInfo = await addAdditionalInfo(values);
    dispatch(addInfo(additinalInfo));
    navigate(APP_ROUTES.main.main as never);
  };

  const onSkip = () => {
    navigate(APP_ROUTES.main.main as never);
  };

  return (
    <Formik
      initialValues={additionalInitialValues}
      validationSchema={additionalValidationSchema}
      onSubmit={onSubmit}
      validateOnBlur>
      {({ handleChange, handleSubmit, handleBlur, values, errors, touched }) => (
        <HideKeyboard>
          <Styled.Container>
            <CustomText fontSize={34}>Welcome!</CustomText>
            <CustomText fontSize={16}>Just one little step left</CustomText>
            <Spacer size={50} />
            {inputs.map((input) => (
              <Styled.InputContainer key={input}>
                <CustomText fontSize={14} fontFamily="Roboto-Medium" textAlign="left">
                  {input === 'username' ? 'Enter your name' : 'Enter your phone number'}
                </CustomText>
                <Spacer size={8} />
                <CustomInput
                  value={values[input]}
                  onChangeText={handleChange(input)}
                  placeholder={input}
                  type={'text'}
                  isAnimated={false}
                  isError={touched[input] && !!errors[input]}
                  onBlur={handleBlur(input)}
                />
                <Spacer size={20} />
              </Styled.InputContainer>
            ))}
            <Spacer size={60} />
            <CustomButton type={'default'} onPress={handleSubmit}>
              NEXT
            </CustomButton>
            <CustomButton type={'cancel'} onPress={onSkip}>
              SKIP
            </CustomButton>
          </Styled.Container>
        </HideKeyboard>
      )}
    </Formik>
  );
};

export default AuthAdditional;
