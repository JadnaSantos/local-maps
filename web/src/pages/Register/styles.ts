import styled from 'styled-components';
import { MapContainer as MapContainerLeaflet } from 'react-leaflet';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 40vw;
  background-color:${({ theme }) => theme.colors.white};
  padding: 50px;
  margin-top: 40px;
  border-radius: 8px;


  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2rem;
    padding-bottom: 30px;
    font-weight: 700;
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;

    padding-bottom: 30px;
    padding-top: 30px;
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    width: 70vw;
  }
`;



export const MapContainer = styled(MapContainerLeaflet)`
  height: 50vh;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  padding-top: 20px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  height: 50px;
  border: none;
  border-radius: 5px;
  width: 60px;


  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

