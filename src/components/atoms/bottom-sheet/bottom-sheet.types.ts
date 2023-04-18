import { ReactNode, RefObject } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

export interface IBottomSheetProps {
  children: ReactNode;
  renderHeader?: ReactNode;
  snapPoints: (string | number)[];
  isWithoutHeader?: boolean;
  sheetRef: RefObject<BottomSheetModal>;
  headerPosition?: 'flex-start' | 'center' | 'flex-end';
}
