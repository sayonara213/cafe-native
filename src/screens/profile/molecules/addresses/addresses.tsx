import React from 'react';

import { useBottomSheet } from '@services/hooks/bottom-tab.hook';

import { SectionContainer } from '@screens/profile/profile.styled';
import BottomSheetHeader from '@screens/main/atoms/bottom-sheet-header/bottom-sheet-header';

import CustomText from '@components/atoms/CustomText/CustomText';
import { Icon } from '@components/atoms/Icon';
import { BottomSheet } from '@components/atoms/bottom-sheet';
import AddressModal from '../address-modal/address-modal';

import { IAddressListProps } from './addresses.types';

import * as Styled from './addresses.styled';
import { itemsShadow } from '@theme/shadows';

const AddressesList: React.FC<IAddressListProps> = ({ addresses }) => {
  const { ref, open } = useBottomSheet();
  const filteredAddresses = addresses?.filter((item) => item.isActive);

  return (
    <SectionContainer style={itemsShadow}>
      <Styled.AddressListHeader>
        <CustomText fontSize={14} fontFamily="Roboto-Medium">
          Addresses
        </CustomText>
        <Icon type="search" size={15} onPress={open} />
      </Styled.AddressListHeader>
      <Styled.AddressList>
        {filteredAddresses?.map((address) => (
          <Styled.AddressListItem key={address.id}>
            <CustomText fontSize={14}>{address.addressName}</CustomText>
          </Styled.AddressListItem>
        ))}
      </Styled.AddressList>
      <BottomSheet
        sheetRef={ref}
        snapPoints={['90%']}
        renderHeader={<BottomSheetHeader text={'Addresses'} icon={'search'} />}
        headerPosition="flex-start">
        <AddressModal />
      </BottomSheet>
    </SectionContainer>
  );
};

export default AddressesList;
