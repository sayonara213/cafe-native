import styled from 'styled-components/native';

export const EditProfileContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  padding: 16px;
`;

export const EditProfileInputWrapper = styled.View`
  margin-bottom: 16px;
`;

export const EditProfileForm = styled.View`
  width: 100%;
  flex: 1;
`;

export const EditProfileButtonWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const EditAvatar = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
