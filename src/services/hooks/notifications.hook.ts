import { API_ROUTES } from '@constants/config';
import { postRequest } from '@services/api.service';
import { useEffect } from 'react';
import { PermissionsAndroid, Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { useNavigation } from '@react-navigation/native';
import { APP_ROUTES } from '@constants/routes';
import { fetchNotifications } from '@services/store/notifications/notifications.reducer';

export const useNotifications = (userId: string, dispatch: any) => {
  const { navigate } = useNavigation();
  useEffect(() => {
    requestPermission();
    checkToken();

    dispatch(fetchNotifications(userId));

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Message handled in the background!', remoteMessage);
    });
    const unsubscribeMessage = messaging().onMessage(async (remoteMessage) => {
      Alert.alert(remoteMessage?.data?.title!, remoteMessage?.data?.message!);
      dispatch(fetchNotifications(userId));
    });
    const unsubscribeNotification = messaging().onNotificationOpenedApp((remoteMessage) => {
      dispatch(fetchNotifications(userId));
      navigate(
        APP_ROUTES.order.orderDetails as never,
        { orderId: remoteMessage?.data?.value } as never,
      );
    });
    return () => {
      unsubscribeMessage();
      unsubscribeNotification();
    };
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
