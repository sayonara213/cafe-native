import React from 'react';

import CustomText from '@components/atoms/CustomText/CustomText';
import { Icon } from '@components/atoms/Icon';

import { IAddressListProps } from './addresses.types';

import * as Styled from './addresses.styled';
import { itemsShadow } from '@theme/shadows';
import { SectionContainer } from '@screens/profile/profile.styled';

const AddressesList: React.FC<IAddressListProps> = ({ addresses }) => {
  return (
    <SectionContainer style={itemsShadow}>
      <Styled.AddressListHeader>
        <CustomText fontSize={14} fontFamily="Roboto-Medium">
          Addresses
        </CustomText>
        <Icon type="search" size={15} />
      </Styled.AddressListHeader>
      <Styled.AddressList>
        {addresses?.map((address) => (
          <Styled.AddressListItem key={address.id}>
            <CustomText fontSize={14}>{address.addressName}</CustomText>
          </Styled.AddressListItem>
        ))}
      </Styled.AddressList>
    </SectionContainer>
  );
};

export default AddressesList;
