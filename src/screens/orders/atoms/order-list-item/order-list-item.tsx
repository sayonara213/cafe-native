import React from 'react';
import { OrderListItemProps } from './order-list-item.types';

import * as Styled from './order-list-item.styled';
import CustomText from '@components/atoms/CustomText/CustomText';

import { theme } from '@theme/theme';
import { Icon } from '@components/atoms/Icon';
import { useNavigation } from '@react-navigation/native';
import { APP_ROUTES } from '@constants/routes';

const OrderListItem: React.FC<OrderListItemProps> = ({ order, onPress }) => {
  const items = order.orderProducts.map((item) => item.product.name).join(', ');

  const { navigate } = useNavigation();

  const handlePress = () => {
    navigate(APP_ROUTES.order.orderDetails as never, { orderId: order.id } as never);
  };

  return (
    <Styled.OrderListItemContainer onPress={handlePress}>
      <Styled.InfoWrap>
        <CustomText fontSize={16} fontFamily="Roboto-Medium">
          {order.id.slice(-5).toUpperCase()}
        </CustomText>
        <CustomText fontSize={14} color={theme.colors.notActive}>
          {new Date(order.deliveryDate).toLocaleTimeString()}
        </CustomText>
      </Styled.InfoWrap>
      <Styled.DescriptionWrap>
        <CustomText fontSize={16} numberOfLines={2}>
          {items}
        </CustomText>
      </Styled.DescriptionWrap>
      <Icon type="forwardArrow" size={20} />
    </Styled.OrderListItemContainer>
  );
};

export default OrderListItem;
