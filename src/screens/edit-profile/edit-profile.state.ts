import React, { useCallback, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';

import { putRequest } from '@services/api.service';
import { useAppSelector } from '@services/hooks/redux.hook';

import { IEditInitialValues, IGalleryOptions } from './edit-profile.types';

import { API_ROUTES } from '@constants/config';

export const useEditProfileState = () => {
  const { user } = useAppSelector((state) => state.user);
  const [pickerResponse, setPickerResponse] = useState<ImagePickerResponse>();
  const navigation = useNavigation();

  const editInitialValues: IEditInitialValues = {
    username: user.name,
    email: user.email,
    phone: user.phone,
  };

  const onSubmit = async (values: IEditInitialValues) => {
    try {
      await putRequest(`${API_ROUTES.user.updateUser}/${user.id}`, values);
      await putRequest(`${API_ROUTES.user.updateAvatar}/${user.id}`, {
        photo:
          pickerResponse?.assets !== undefined
            ? `data:image/png;base64,${pickerResponse.assets[0].base64}`
            : user.image,
      });
      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  };

  const onImageLibraryPress = useCallback(() => {
    const options: IGalleryOptions = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: true,
    };

    setTimeout(() => launchImageLibrary(options, setPickerResponse), 500);
  }, []);

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

  return {
    editInitialValues,
    onSubmit,
    onImageLibraryPress,
    pickerResponse,
    editProfileList,
    user,
  };
};
