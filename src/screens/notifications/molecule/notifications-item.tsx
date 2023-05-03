import React from 'react';

import * as Styled from './notifications-item.styled';
import CustomText from '@components/atoms/CustomText/CustomText';
import { NotificationsItemProps } from './notifications-item.types';

import { theme } from '@theme/theme';
import { Icon } from '@components/atoms/Icon';
import { useAppDispatch } from '@services/hooks/redux.hook';
import { setNotificationRead } from '@services/store/notifications/notifications.reducer';
import { putRequest } from '@services/api.service';
import { API_ROUTES } from '@constants/config';
import { useNavigation } from '@react-navigation/native';
import { APP_ROUTES } from '@constants/routes';

const NotificationsItem: React.FC<NotificationsItemProps> = ({ notification }) => {
  const dispatch = useAppDispatch();

  const { navigate } = useNavigation();

  const handleClick = () => {
    if (!notification.isSeen) {
      putRequest(`${API_ROUTES.notifications.setRead}/${notification.id}`, { isSeen: true });
      dispatch(setNotificationRead(notification.id));
    }
    navigate(APP_ROUTES.order.orderDetails as never, { orderId: notification.order.id } as never);
  };

  return (
    <Styled.NotificationsItemContainer onPress={handleClick}>
      <Styled.DescriptionWrap>
        <Styled.IsReadIndicator isRead={notification.isSeen} />
        <Styled.InfoWrap>
          <CustomText fontSize={16} fontFamily="Roboto-Medium">
            {`${notification.order.id.slice(-5).toUpperCase()} is ${notification.order.status}`}
          </CustomText>
          <CustomText fontSize={14} color={theme.colors.notActive}>
            {new Date(notification.createdAt).toLocaleTimeString()}
          </CustomText>
        </Styled.InfoWrap>
      </Styled.DescriptionWrap>
      <Icon type="forwardArrow" size={20} />
    </Styled.NotificationsItemContainer>
  );
};

export default NotificationsItem;
