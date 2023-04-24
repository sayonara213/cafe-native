import React from 'react';

import { Formik } from 'formik';

import CustomText from '@components/atoms/CustomText/CustomText';
import CustomInput from '@components/atoms/CustomInput/CustomInput';
import CustomButton from '@components/atoms/CustomButton/CustomButton';
import Spacer from '@components/atoms/Spacer/Spacer';
import { CustomImage } from '@components/atoms/CustomImage';
import { HideKeyboard } from '@components/atoms/CustomInput/HideKeyboard/HideKeyboard';

import { useEditProfileState } from './edit-profile.state';

import { editProfileValidationSchema } from '@screens/auth/validation/validation';

import * as Styled from './edit-profile.styled';
import { theme } from '@theme/theme';

const EditProfile: React.FC = () => {
  const {
    onSubmit,
    onImageLibraryPress,
    editInitialValues,
    pickerResponse,
    user,
    editProfileList,
  } = useEditProfileState();

  return (
    <Styled.EditProfileContainer>
      <Spacer size={16} />
      <CustomImage
        source={{
          uri: pickerResponse?.assets !== undefined ? pickerResponse.assets[0].uri : user.image,
        }}
        borderRadius={100}
        width={128}
        height={128}
        resizeMode="cover">
        <Styled.EditAvatar activeOpacity={0.8} onPress={onImageLibraryPress}>
          <CustomText fontSize={12} color={theme.colors.primary}>
            change
          </CustomText>
        </Styled.EditAvatar>
      </CustomImage>
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
                <Styled.EditProfileInputWrapper key={item.title}>
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
