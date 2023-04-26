import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  padding: 0 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.secondary};
  height: 60px;
`;

export const HeaderButtonContainer = styled.View`
  width: 120px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const IconWrap = styled.View`
  width: 20px;
  height: 20px;
  position: relative;
`;

export const IconBadge = styled.View`
  position: absolute;
  right: 0;
  top: 0;

  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.purple};
`;
