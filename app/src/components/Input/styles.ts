import styled from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather';


export const Container = styled.View`
  width: 100%;
  height: 60px;

  background: ${({ theme }) => theme.colors.background};
  border: 1px solid  ${({ theme }) => theme.colors.text};


  margin-bottom: 8px;
  border-radius: 10px;
  padding: 0 16px;

  flex-direction: row;
  align-items: center;

`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};

  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
