import React from 'react';

import { IMenu } from '@typings/types.menu';
import { IProduct } from '@typings/types.products';

import * as Styled from './main-list-item.styled';
import { CustomImage } from '@components/atoms/CustomImage';
import CustomText from '@components/atoms/CustomText/CustomText';
import CustomButton from '@components/atoms/CustomButton/CustomButton';
import Spacer from '@components/atoms/Spacer/Spacer';
import { itemsShadow } from '@theme/shadows';

interface MainListItemProps {
  item: IProduct | IMenu;
  index: number;
}

const MainListItem: React.FC<MainListItemProps> = ({ item, index }) => {
  return (
    <Styled.MainListItemContainer index={index} style={itemsShadow}>
      <CustomImage
        source={{
          uri: item.image,
        }}
        width={'100%'}
        height={136}
      />
      <Spacer size={16} />
      <Styled.ListItemTextWrap>
        <CustomText fontSize={14} fontFamily="Roboto-Medium" textAlign="left">
          {item.name}
        </CustomText>
        <Spacer size={5} />
        <CustomText fontSize={14} fontFamily="Roboto-Regular" textAlign="left" numberOfLines={2}>
          {item.description}
        </CustomText>
      </Styled.ListItemTextWrap>
      <Styled.PriceWrap>
        <CustomText fontSize={20} fontFamily="Roboto-Regular" textAlign="center">
          {item.price} uah
        </CustomText>
      </Styled.PriceWrap>
      <Spacer size={10} />
      <CustomButton>TO CART</CustomButton>
    </Styled.MainListItemContainer>
  );
};

export default MainListItem;
