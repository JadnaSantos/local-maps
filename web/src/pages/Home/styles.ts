import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;

  gap: 3.5rem;
  padding: 5.75rem 0;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;



export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 95%;

  h1 {
    font-size: 3rem;
    line-height: 1.3;
    font-weight: 700;
    font-style: normal;

    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary}
  }

  span {
    font-size: 1.25rem;
    line-height: 1.3rem;
    margin-top: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text}
  }

  @media (max-width: 976px) {
    text-align: center;
    align-items: center;
  }
`;

export const ButtonBox = styled.div`
  background-color:  ${({ theme }) => theme.colors.secondary};
  color:  ${({ theme }) => theme.colors.white};
  height: 50px;
  width: 40px;
  font-size: 1rem;

  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color:  ${({ theme }) => theme.colors.primary};
  color:  ${({ theme }) => theme.colors.white};
  height: 50px;
  border: none;

  margin-top: 1rem;
  border-radius: 5px;
  position: relative;
  padding-left: 50px;

`;

export const HomeImage = styled.div`
  @media (max-width: 976px) {
    display: none;
  }
`;
