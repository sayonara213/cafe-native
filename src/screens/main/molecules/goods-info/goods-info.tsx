import React, { useEffect } from 'react';

import { CustomImage } from '@components/atoms/CustomImage';

import { GoodsInfoProps } from './goods-info.types';

import * as Styled from './goods-info.styled';
import CustomText from '@components/atoms/CustomText/CustomText';
import { ActivityIndicator } from 'react-native';
import Spacer from '@components/atoms/Spacer/Spacer';
import { useGoodsInfoState } from './goods-info.state';
import CustomButton from '@components/atoms/CustomButton/CustomButton';

const GoodsInfo: React.FC<GoodsInfoProps> = ({ goodId, isProduct }) => {
  const { fetchMenu, fetchProduct, isLoading, goodItem, allergens, contains } =
    useGoodsInfoState(goodId);

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

  useEffect(() => {
    isProduct ? fetchProduct() : fetchMenu();
  }, [isProduct, fetchProduct, fetchMenu]);

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
      <CustomButton>TO CART</CustomButton>
    </Styled.GoodsInfoContainer>
  );
};

export default GoodsInfo;
