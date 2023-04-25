import React, { useEffect } from 'react';

import { ActivityIndicator } from 'react-native';

import { CustomImage } from '@components/atoms/CustomImage';
import CustomText from '@components/atoms/CustomText/CustomText';
import Spacer from '@components/atoms/Spacer/Spacer';
import CustomButton from '@components/atoms/CustomButton/CustomButton';

import { addItemToCart } from '@services/store/cart/cart.reducer';
import { useGoodsInfoState } from './goods-info.state';
import { useAppDispatch } from '@services/hooks/redux.hook';

import { GoodsInfoProps } from './goods-info.types';

import * as Styled from './goods-info.styled';

const GoodsInfo: React.FC<GoodsInfoProps> = ({ goodId, isProduct }) => {
  const { fetchMenu, fetchProduct, isLoading, goodItem, allergens, contains } =
    useGoodsInfoState(goodId);

  const dispatch = useAppDispatch();

  const goodsInfoList = [
    {
      title: 'Allergens',
      value: allergens.join(', '),
    },
    {
      title: 'Contains',
      value: contains.join(', '),
    },
  ];

  const addToCart = () => {
    const good = {
      id: goodId,
      quantity: 1,
      price: goodItem.price,
      isProduct: isProduct,
    };
    dispatch(addItemToCart(good));
  };

  console.log(123);

  useEffect(() => {
    isProduct ? fetchProduct() : fetchMenu();
  }, [isProduct]);

  if (isLoading) {
    return (
      <Styled.GoodsLoadingContainer>
        <ActivityIndicator size={'large'} color={'#000000'} />
      </Styled.GoodsLoadingContainer>
    );
  }

  return (
    <Styled.GoodsInfoContainer>
      <CustomImage source={{ uri: goodItem?.image }} width={156} height={156} />
      <Spacer size={8} />
      <CustomText fontSize={34}>{goodItem?.name}</CustomText>
      <Spacer size={16} />
      <Styled.GoodsInfoWrap>
        <CustomText fontSize={16} textAlign="left">
          {goodItem?.description}
        </CustomText>
        <Spacer size={14} />
        {goodsInfoList.map((item) => (
          <Styled.GoodsInfoSection key={item.title}>
            <CustomText fontSize={16} fontFamily="Roboto-Medium" textAlign="left">
              {item.title}:
            </CustomText>
            <Spacer size={8} />
            <CustomText fontSize={16} fontFamily="Roboto-Regular" textAlign="left">
              {item.value}
            </CustomText>
            <Spacer size={16} />
          </Styled.GoodsInfoSection>
        ))}
      </Styled.GoodsInfoWrap>
      <Styled.GoodsPriceWrap>
        <CustomText fontSize={24} fontFamily="Roboto-Regular" textAlign="left">
          {goodItem?.price} uah
        </CustomText>
        <CustomText fontSize={24} fontFamily="Roboto-Regular" textAlign="left">
          {goodItem?.weight} g
        </CustomText>
      </Styled.GoodsPriceWrap>
      <Spacer size={20} />
      <CustomButton onPress={addToCart}>TO CART</CustomButton>
    </Styled.GoodsInfoContainer>
  );
};

export default GoodsInfo;
