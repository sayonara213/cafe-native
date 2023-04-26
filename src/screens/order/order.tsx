import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import RNPickerSelect from 'react-native-picker-select';

import CustomButton from '@components/atoms/CustomButton/CustomButton';
import CustomText from '@components/atoms/CustomText/CustomText';
import Spacer from '@components/atoms/Spacer/Spacer';
import CustomRadioButton from '@components/atoms/radio-button/radio-button';
import CustomTextField from '@components/atoms/custom-text-field/custom-text-field';
import CustomDatePicker from '@components/organisms/date-picker/date-picker';

import { useAppSelector } from '@services/hooks/redux.hook';

import { pickerSelectStyles } from './order.constants';
import { APP_ROUTES } from '@constants/routes';

import { IAddress } from '@typings/types.address';

import * as Styled from './order.styled';

const Order: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);
  const { navigate } = useNavigation();

  const [orderAddress, setOrderAddress] = useState<IAddress>({} as IAddress);
  const [isDeliverNow, setIsDeliverNow] = useState<boolean>(true);
  const [deliveryDate, setDeliveryDate] = useState<Date>(new Date());
  const [comment, setComment] = useState<string>('');

  const addressItems = user.addresses.map((address) => ({
    label: address.addressName,
    value: address,
  }));

  const handleAddAddress = () => {
    navigate(APP_ROUTES.main.profile as never);
  };

  const handleSelectAddress = (address: IAddress) => {
    setOrderAddress(address);
  };

  const handleDeliver = (select: string) => {
    setIsDeliverNow(select === 'now');
  };

  const handleDeliveryDate = (date: Date) => {
    setDeliveryDate(date);
  };

  const handleOrder = () => {
    orderAddress.addressName &&
      navigate(
        APP_ROUTES.main.orderConfirmation as never,
        {
          address: orderAddress,
          deliveryDate: deliveryDate.toISOString(),
          comment: comment,
        } as never,
      );
  };

  return (
    <Styled.SafeOrderView>
      <Styled.OrderContainer showsVerticalScrollIndicator={false}>
        <CustomText fontFamily="Roboto-Medium" fontSize={16} textAlign="left">
          Choose Address
        </CustomText>
        <Spacer size={8} />
        <RNPickerSelect
          onValueChange={handleSelectAddress}
          items={addressItems}
          style={pickerSelectStyles}
          placeholder={{ label: 'Address', value: null }}
        />
        <CustomButton type="purple" onPress={handleAddAddress} contentSide="flex-end">
          ADD ADDRESS
        </CustomButton>
        <Spacer size={60} />
        <CustomText fontFamily="Roboto-Medium" fontSize={16} textAlign="left">
          Choose date and time of delivery
        </CustomText>
        <Spacer size={8} />
        <CustomRadioButton
          value="now"
          label="Right Now"
          onPress={handleDeliver}
          checked={isDeliverNow}
        />
        <CustomRadioButton
          value="later"
          label="Choose date and time of delivery"
          onPress={handleDeliver}
          checked={!isDeliverNow}
        />
        {!isDeliverNow && (
          <CustomDatePicker date={deliveryDate} onDateChange={handleDeliveryDate} />
        )}
        <Styled.CommentSection>
          <CustomText fontFamily="Roboto-Medium" fontSize={16} textAlign="left">
            Add a comment
          </CustomText>
          <Spacer size={8} />
          <CustomTextField placeholder="Your Comment" value={comment} onChangeText={setComment} />
          <Spacer size={8} />
        </Styled.CommentSection>
      </Styled.OrderContainer>
      <CustomButton
        onPress={handleOrder}
        type={!orderAddress.addressName ? 'notActive' : 'default'}>
        GO ON
      </CustomButton>
    </Styled.SafeOrderView>
  );
};

export default Order;
