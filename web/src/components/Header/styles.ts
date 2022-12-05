import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.header`
  padding: 1rem 0;
  position: sticky;
  top: 0;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid hsla(0, 0%, 98%, 0.1);
  z-index: 5;

  img{
    width: 10%;
  }

  @media (max-width: 769px) {
    img {
      width: 20%;
    }
  }

  @media (max-width: 425px) {
    img {
      width: 40%;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
  }

  button {
    all: unset;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
      color: ${shade(0.2, '#6C6C80')};
    }

    svg {
      margin-right: 17px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0.75rem;

  img {
    &:hover {
      cursor: pointer;
    }
  }
`;
