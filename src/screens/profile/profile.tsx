import React, { useEffect } from 'react';

import { RefreshControl } from 'react-native-gesture-handler';

import { CustomImage } from '@components/atoms/CustomImage';
import CustomText from '@components/atoms/CustomText/CustomText';
import AddressesList from './molecules/addresses/addresses';
import ProfileSettings from './molecules/settings/settings';

import { useProfileState } from './profile.state';

import * as Styled from './profile.styled';
import { itemsShadow } from '@theme/shadows';
import ProfileButton from './atoms/profile-button/profile-button';

const Profile: React.FC = () => {
  const { user, refreshing, onRefresh, fetchUser, signOut, editProfile } = useProfileState();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Styled.ProfileContainer
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <Styled.ProfileHeader style={itemsShadow}>
        {user.image ? (
          <CustomImage
            source={{ uri: user.image }}
            width={70}
            height={70}
            borderRadius={50}
            resizeMode="cover"
          />
        ) : (
          <CustomImage type={'userTest'} width={70} height={70} borderRadius={50} />
        )}
        <Styled.UserInfoWrap>
          <CustomText fontSize={34}>{user.name}</CustomText>
          <CustomText fontSize={14} textAlign="left">
            {user.email}
          </CustomText>
        </Styled.UserInfoWrap>
        <Styled.UserRoleWrap>
          <CustomText fontSize={12}>{user.role}</CustomText>
        </Styled.UserRoleWrap>
      </Styled.ProfileHeader>
      <AddressesList addresses={user.addresses} />
      <ProfileSettings />
      <Styled.ButtonsWrap>
        <ProfileButton label="EDIT PROFILE" onPress={editProfile} isCancel={false} />
        <ProfileButton label="SIGN OUT" onPress={signOut} isCancel={true} />
      </Styled.ButtonsWrap>
    </Styled.ProfileContainer>
  );
};

export default Profile;
