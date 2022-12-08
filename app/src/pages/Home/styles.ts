import { Platform } from 'react-native';
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background} ;
`;

export const Content = styled.View`
  padding: 20px;

  padding-top: ${Platform.OS === 'android' ? 50 : 0}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.primary} ;
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text} ;
`;

export const CategoriesContainer = styled.View`
  padding: 10px;

`;

export const CategoriesItem = styled.TouchableOpacity`
  height: 110px;
  width: 100px;

  background-color: ${({ theme }) => theme.colors.toast} ;

  justify-content: center;
  align-items: center;

  border-radius: 10px;
`;

export const CategoriesImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const CategoriesText = styled.Text`
  align-items: center;
  color: ${({ theme }) => theme.colors.text} ;
`;
