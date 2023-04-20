import React from 'react';

import { IMenu } from '@typings/types.menu';
import { IProduct } from '@typings/types.products';

import * as Styled from './main-list-item.styled';
import { CustomImage } from '@components/atoms/CustomImage';
import CustomText from '@components/atoms/CustomText/CustomText';
import CustomButton from '@components/atoms/CustomButton/CustomButton';
import Spacer from '@components/atoms/Spacer/Spacer';
import { itemsShadow } from '@theme/shadows';
import { BottomSheet } from '@components/atoms/bottom-sheet';
import { useBottomSheet } from '@services/hooks/bottom-tab.hook';
import BottomSheetHeader from '../bottom-sheet-header/bottom-sheet-header';
import GoodsInfo from '@screens/main/molecules/goods-info/goods-info';

interface MainListItemProps {
  item: IProduct | IMenu;
  index: number;
}

const MainListItem: React.FC<MainListItemProps> = ({ item, index }) => {
  const { ref, open } = useBottomSheet();

  const checkIfProduct = (good: IProduct | IMenu): good is IProduct => {
    return 'ingredients' in good;
  };

  return (
    <Styled.MainListItemContainer
      index={index}
      style={itemsShadow}
      activeOpacity={0.95}
      onPress={open}>
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

      <BottomSheet
        snapPoints={['90%']}
        sheetRef={ref}
        renderHeader={<BottomSheetHeader text={'Info'} icon={'search'} />}
        headerPosition="flex-start">
        <GoodsInfo goodId={item.id} isProduct={checkIfProduct(item)} />
      </BottomSheet>
    </Styled.MainListItemContainer>
  );
};

export default MainListItem;
