import styled from 'styled-components/native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { Platform } from 'react-native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};

  padding: 0 5px ${Platform.OS === 'android' ? 150 : 40}px;
`
export const Logo = styled.Image`
  margin-bottom: 18px;
`

export const InputContainer = styled.View`
  width: 95%;
  align-items: center;
  justify-content: center;

  padding: 32px 14px;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
`


export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 95%;
  border-radius: 4px;
  height: 40px;

  background-color: ${({ theme }) => theme.colors.button};
`

export const TextButton = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color:${({ theme }) => theme.colors.white};;
`
export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  border-top-width: 1px;
  border-color: #232129;

  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;

`;

export const CreateAccountText = styled.Text`
  font-size: 16px;
  margin-left: 16px;
`;
