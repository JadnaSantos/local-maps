import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';
import { Popup } from 'react-leaflet';



export const Container = styled.div`
  width: 74vw;
  height: 90vh;
  position: relative;
  display: flex;
`;

export const Content = styled.aside`
  width: 400px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  footer {
    display: flex;
    flex-direction: column;
    line-height: 24px;
  }

  footer strong {
    font-weight: 800;
  }
`;

export const LinkTo = styled(Link)`
  position: absolute;

  right: 40px;
  bottom: 40px;
  z-index: 1000;

  width: 64px;
  height: 64px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;


  &:hover{
    background: ${shade(0.2, '#6C63FF')};
  }
`;


export const LinkPoup = styled(Popup)`
  width: 40px;
  height: 40px;
`;





