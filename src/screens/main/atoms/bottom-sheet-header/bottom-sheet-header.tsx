import React from 'react';

import { Icon, TIconNames } from '@components/atoms/Icon';
import CustomText from '@components/atoms/CustomText/CustomText';

import * as Styled from './bottom-sheet-header.styled';

interface BottomSheetHeaderProps {
  text: string;
  icon: TIconNames;
}

const BottomSheetHeader: React.FC<BottomSheetHeaderProps> = ({ text, icon }) => {
  return (
    <Styled.BottomSheetHeaderContainer>
      <Icon type={icon} size={18} />
      <CustomText fontSize={14} fontFamily="Roboto-Medium">
        {text}
      </CustomText>
    </Styled.BottomSheetHeaderContainer>
  );
};

export default BottomSheetHeader;
