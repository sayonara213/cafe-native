import React from 'react';

import { Formik } from 'formik';

import CustomButton from '@components/atoms/CustomButton/CustomButton';
import CustomInput, { TInput } from '@components/atoms/CustomInput/CustomInput';
import { HideKeyboard } from '@components/atoms/CustomInput/HideKeyboard/HideKeyboard';
import { Icon } from '@components/atoms/Icon';
import Spacer from '@components/atoms/Spacer/Spacer';

import * as Styled from './auth.styled';
import { ILoginValues } from './auth.types';
import CustomText from '@components/atoms/CustomText/CustomText';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { APP_ROUTES } from '@constants/routes';
import { validationSchema } from './validation/validation';
import { postRequest } from '@services/api.service';
import { useAppDispatch } from '@services/hooks/redux.hook';
import { setUser } from '@services/store/user';
import { API_ROUTES } from '@constants/config';

interface IAuthProps {
  isLogin: boolean;
}

type TAuthProps = RouteProp<Record<string, IAuthProps>, string>;

const inputs: TInput[] = ['email', 'password'];

const authInitialValues: ILoginValues = {
  email: '',
  password: '',
};

const Auth: React.FC = () => {
  const route = useRoute<TAuthProps>();
  const { navigate } = useNavigation();
  const dispatch = useAppDispatch();

  const authUser = async (values: ILoginValues, apiRoute: string) => {
    try {
      return await postRequest(apiRoute, values);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (values: ILoginValues) => {
    const user = await authUser(
      values,
      route?.params?.isLogin ? API_ROUTES.auth.login : API_ROUTES.auth.register,
    );
    dispatch(setUser(user));
  };

  const handleSwitchAuth = () => {
    route?.params?.isLogin
      ? navigate(APP_ROUTES.main.register as never, { isLogin: false } as never)
      : navigate(APP_ROUTES.main.login as never, { isLogin: true } as never);
  };

  return (
    <Formik
      initialValues={authInitialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnBlur>
      {({ handleChange, handleSubmit, handleBlur, values, errors, touched }) => (
        <HideKeyboard>
          <Styled.Container>
            <Icon type="logo" />
            <Spacer size={50} />
            {inputs.map((input) => (
              <Styled.InputContainer key={input}>
                <CustomInput
                  value={values[input]}
                  onChangeText={handleChange(input)}
                  placeholder={input}
                  type={input}
                  isAnimated={true}
                  isError={touched[input] && !!errors[input]}
                  onBlur={handleBlur(input)}
                />
                <Spacer size={20} />
              </Styled.InputContainer>
            ))}
            <Styled.AdditionalButtonsContainer>
              <CustomText fontSize={14} fontFamily="Roboto-Medium" onPress={handleSwitchAuth}>
                {route?.params?.isLogin ? 'Register' : 'Login'}
              </CustomText>
              {route?.params?.isLogin === true && (
                <CustomText fontSize={14} fontFamily="Roboto-Medium">
                  Forgot password?
                </CustomText>
              )}
            </Styled.AdditionalButtonsContainer>
            <Spacer size={60} />
            <CustomButton type={'default'} onPress={handleSubmit}>
              SUBMIT
            </CustomButton>
            <CustomButton type={'cancel'}>SKIP</CustomButton>
          </Styled.Container>
        </HideKeyboard>
      )}
    </Formik>
  );
};

export default Auth;
