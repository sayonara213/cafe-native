import { API_ROUTES } from '@constants/config';
import { postRequest } from '@services/api.service';
import { useEffect } from 'react';
import { PermissionsAndroid, Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

export const useNotifications = (userId: string) => {
  useEffect(() => {
    requestPermission();
    checkToken();

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Message handled in the background!', remoteMessage);
    });
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert(remoteMessage?.data?.title!, remoteMessage?.data?.message!);
    });
    return unsubscribe;
  }, []);

  const checkToken = async () => {
    if (userId) {
      const token = await messaging().getToken();
      await postRequest(API_ROUTES.notifications.setToken, { fcm_id: token, userId: userId });
    }
  };

  const requestPermission = async () => {
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  };
};
