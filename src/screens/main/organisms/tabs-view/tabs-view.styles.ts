import styled from 'styled-components/native';

export const StyledTabsView = {
  TabContainer: styled.View``,
  TabsView: styled.View`
    background-color: ${({ theme }) => theme.colors.secondary};
  `,
  TabButton: styled.TouchableOpacity<{ isActive: boolean }>`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    height: 45px;
  `,
  TabBar: styled.View`
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.primary}1F;
    height: 45px;
    align-items: center;
  `,
};
