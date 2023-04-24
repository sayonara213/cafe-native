import React from 'react';

import CustomInput from '@components/atoms/CustomInput/CustomInput';
import Spacer from '@components/atoms/Spacer/Spacer';
import CustomCheckBox from '@components/molecules/check-box/check-box';
import { Icon } from '@components/atoms/Icon';

import { useAddressModalState } from './address-modal.state';

import * as Styled from './address-modal.styled';
import CustomButton from '@components/atoms/CustomButton/CustomButton';

const AddressModal: React.FC = () => {
  const { input, handleInput, filteredAddresses, handleToggle, handleDelete, handleAdd } =
    useAddressModalState();

  return (
    <Styled.AddressModalContainer>
      <Spacer size={16} />
      <CustomInput value={input} onChangeText={handleInput} placeholder="Address" />
      {filteredAddresses.map((address) => (
        <Styled.AddressWrapper key={address.id}>
          <CustomCheckBox
            label={address.addressName}
            value={address}
            checked={address.isActive}
            onPress={handleToggle}
          />
          <Icon type="close" size={20} onPress={handleDelete.bind(null, address)} />
        </Styled.AddressWrapper>
      ))}
      {filteredAddresses.length === 0 && input.length > 0 && (
        <>
          <Spacer size={16} />
          <CustomButton onPress={handleAdd}>ADD ADDRESS</CustomButton>
        </>
      )}
    </Styled.AddressModalContainer>
  );
};

export default AddressModal;
