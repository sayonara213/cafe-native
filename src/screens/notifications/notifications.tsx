import React, { useEffect, useState } from 'react';

import { RefreshControl, View } from 'react-native';

import CustomText from '@components/atoms/CustomText/CustomText';
import { useAppSelector } from '@services/hooks/redux.hook';

import * as Styled from './notifications.styled';
import { INotificationList } from './notifications.types';
import { INotification } from '@typings/types.notification';

import { itemsShadow } from '@theme/shadows';
import NotificationsItem from './molecule/notifications-item';

const Notifications: React.FC = () => {
  const notifications = useAppSelector((store) => store.notifications.notifications);

  const [refreshing, setRefreshing] = useState(false);
  const [splitNotifications, setSplitNotifications] = useState<INotificationList[]>([]);

  const handleRefresh = () => {
    setRefreshing(true);
    setRefreshing(false);
  };

  const notificationsByDate = (fetchedNotifications: INotification[]) => {
    return fetchedNotifications.reduce((acc: INotificationList[], notif: INotification) => {
      const date = new Date(notif.createdAt);
      date.setHours(0, 0, 0, 0);
      const dateExists = acc.some(
        (item: INotificationList) => item.date.getTime() === date.getTime(),
      );
      if (dateExists) {
        acc.forEach((item: INotificationList) => {
          if (item.date.getTime() === date.getTime()) {
            item.notifications.push(notif);
          }
        });
      } else {
        acc.push({ date, notifications: [notif] });
      }
      return acc;
    }, []);
  };

  useEffect(() => {
    setSplitNotifications(notificationsByDate(notifications));
  }, [notifications]);

  return (
    <Styled.NotificationsContainer
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>
      {splitNotifications.map((notification) => (
        <Styled.SectionContainer style={itemsShadow} key={notification.date.toISOString()}>
          <Styled.NotificationsHeader>
            <CustomText fontFamily="Roboto-Medium" fontSize={14}>
              {notification.date.toLocaleDateString()}
            </CustomText>
          </Styled.NotificationsHeader>
          {notification.notifications.map((item) => (
            <NotificationsItem notification={item} key={item.id} />
          ))}
        </Styled.SectionContainer>
      ))}
    </Styled.NotificationsContainer>
  );
};

export default Notifications;
