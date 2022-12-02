import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.div`
  min-height: 100vh;
  display: flex;

  justify-content: center;

  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  margin-top: 1rem;
  width: 600px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  padding: 2rem 1.5rem;


  form {
    margin: 50px 0;
    width: 430px;

    text-align: center;

    h4 {
      margin-bottom: 24px;
      color: ${({ theme }) => theme.colors.text};
    }

    > a {
      color: ${({ theme }) => theme.colors.text};
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover{
        color: ${shade(0.2, '#6C6C80')};
      }
    }
  }

  > a {
    color: ${({ theme }) => theme.colors.text};
    margin-top: 5px;
    text-decoration: none;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover{
      color: ${shade(0.2, '#6C6C80')};
    }
  }

`;

export const Background = styled.div`
`;
