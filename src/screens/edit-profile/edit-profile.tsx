import React from 'react';

import { Formik } from 'formik';

import CustomText from '@components/atoms/CustomText/CustomText';
import CustomInput from '@components/atoms/CustomInput/CustomInput';
import CustomButton from '@components/atoms/CustomButton/CustomButton';
import Spacer from '@components/atoms/Spacer/Spacer';
import { CustomImage } from '@components/atoms/CustomImage';
import { HideKeyboard } from '@components/atoms/CustomInput/HideKeyboard/HideKeyboard';

import { putRequest } from '@services/api.service';
import { useAppSelector } from '@services/hooks/redux.hook';

import { IEditInitialValues } from './edit-profile.types';

import { API_ROUTES } from '@constants/config';
import { editProfileValidationSchema } from '@screens/auth/validation/validation';

import * as Styled from './edit-profile.styled';

const editProfileList = [
  {
    title: 'username',
    value: 'John Doe',
  },
  {
    title: 'email',
    value: 'asdada@gmail.com',
  },
  {
    title: 'phone',
    value: '+380999999999',
  },
];

const EditProfile: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);

  const editInitialValues: IEditInitialValues = {
    username: user.name,
    email: user.email,
    phone: user.phone,
  };

  const onSubmit = async (values: IEditInitialValues) => {
    try {
      await putRequest(`${API_ROUTES.user.updateUser}/${user.id}`, values);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Styled.EditProfileContainer>
      <Spacer size={16} />
      <CustomImage
        source={{ uri: user.image }}
        borderRadius={100}
        width={128}
        height={128}
        resizeMode="cover"
      />
      <Spacer size={16} />
      <Formik
        initialValues={editInitialValues}
        onSubmit={onSubmit}
        validationSchema={editProfileValidationSchema}
        validateOnBlur>
        {({ handleChange, handleSubmit, handleBlur, values, errors, touched }) => (
          <HideKeyboard>
            <Styled.EditProfileForm>
              {editProfileList.map((item) => (
                <Styled.EditProfileInputWrapper>
                  <CustomText fontFamily="Roboto-Medium" fontSize={16} textAlign="left">
                    {item.title}
                  </CustomText>
                  <Spacer size={8} />
                  <CustomInput
                    value={values[item.title]}
                    onChangeText={handleChange(item.title)}
                    placeholder={item.value}
                    isError={!!errors[item.title] && touched[item.title]}
                    onBlur={handleBlur(item.title)}
                  />
                </Styled.EditProfileInputWrapper>
              ))}
              <Styled.EditProfileButtonWrapper>
                <CustomButton onPress={handleSubmit}>SAVE</CustomButton>
              </Styled.EditProfileButtonWrapper>
            </Styled.EditProfileForm>
          </HideKeyboard>
        )}
      </Formik>
    </Styled.EditProfileContainer>
  );
};

export default EditProfile;
