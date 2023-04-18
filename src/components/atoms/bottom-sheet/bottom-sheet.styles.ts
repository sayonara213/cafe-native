import styled from 'styled-components/native';

import { Icon } from '@components/atoms/Icon';

export const StyledBottomSheet = {
  Content: styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-horizontal: 16px;
  `,
  HandleContainer: styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    height: 20px;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `,
  Handle: styled.View`
    background-color: rgba(19, 34, 57, 0.2);
    height: 5px;
    width: 36px;
    border-radius: 100px;
  `,
  Header: styled.View<{ headerPosition: 'center' | 'flex-start' | 'flex-end' }>`
    align-items: ${({ headerPosition }) => headerPosition};
    position: relative;
    padding-bottom: 16px;

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.borderNotActive};
  `,
  CustomIcon: styled(Icon)`
    position: absolute;
    right: 0;
    top: 5px;
  `,
};
