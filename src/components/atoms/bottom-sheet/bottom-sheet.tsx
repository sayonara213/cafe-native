import React from 'react';
import { View } from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';

import { IBottomSheetProps } from './bottom-sheet.types';

import { StyledBottomSheet as Styled } from './bottom-sheet.styles';

const CustomBottomSheetBackdrop: React.FC<BottomSheetBackdropProps> = (props) => {
  return <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />;
};

export const BottomSheet: React.FC<IBottomSheetProps> = (props) => {
  const {
    children,
    sheetRef,
    snapPoints,
    headerPosition = 'center',
    isWithoutHeader,
    renderHeader,
  } = props;

  const close = () => {
    sheetRef.current?.dismiss();
  };

  const { animatedSnapPoints, animatedHandleHeight, animatedContentHeight, handleContentLayout } =
    useBottomSheetDynamicSnapPoints(['CONTENT_HEIGHT']);

  return (
    <BottomSheetModal
      ref={sheetRef}
      enablePanDownToClose
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      snapPoints={snapPoints || animatedSnapPoints}
      handleComponent={() => (
        <Styled.HandleContainer>
          <Styled.Handle />
        </Styled.HandleContainer>
      )}
      backdropComponent={(backdropProps) => <CustomBottomSheetBackdrop {...backdropProps} />}>
      <Styled.Content onLayout={handleContentLayout}>
        {!isWithoutHeader && (
          <Styled.Header headerPosition={headerPosition}>
            <View>{renderHeader}</View>
            <Styled.CustomIcon type={'settings'} onPress={close} />
          </Styled.Header>
        )}
        {children}
      </Styled.Content>
    </BottomSheetModal>
  );
};
