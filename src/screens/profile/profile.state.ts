import { API_ROUTES } from '@constants/config';
import { APP_ROUTES } from '@constants/routes';
import { useNavigation } from '@react-navigation/native';
import { getRequest } from '@services/api.service';
import { useAppSelector, useAppDispatch } from '@services/hooks/redux.hook';
import { setAddresses, setUser, logOut } from '@services/store/user';
import { IUser } from '@services/store/user/user.types';
import { IAddress } from '@typings/types.address';
import { useState, useCallback, useEffect } from 'react';

export const useProfileState = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { user, access_token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation();

  const fetchAddresses = async () => {
    try {
      const addresses = (await getRequest(
        `${API_ROUTES.user.getAddresses}/${user.id}`,
      )) as IAddress[];
      dispatch(setAddresses(addresses));
    } catch (e: any) {
      console.error('Error fetching addresses:', e);
    }
  };

  const fetchUser = async () => {
    try {
      const fetchedUser = (await getRequest(API_ROUTES.auth.retrieve)) as IUser;
      dispatch(setUser({ user: fetchedUser, access_token: access_token }));
      await fetchAddresses();
    } catch (e: any) {
      console.error('Error fetching user:', e);
    }
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchUser();
    setRefreshing(false);
  }, []);

  const signOut = () => {
    dispatch(logOut());
  };

  const editProfile = () => {
    navigate(APP_ROUTES.user.editProfile as never);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user,
    refreshing,
    onRefresh,
    signOut,
    fetchUser,
    editProfile,
  };
};
