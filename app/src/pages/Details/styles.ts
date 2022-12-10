import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1px;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    font-weight: bold;
`;

export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: 15px;
    font-weight: bold;
`;

export const Section = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    font-weight: bold;

    padding: 10px;
`;

export const TextInfo = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
`;
