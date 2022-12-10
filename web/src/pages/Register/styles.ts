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

  @media (max-width: 1024px) {
    width: 70vw;
  }
`;

export const FormTitle = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;

  font-size: 20px;
  padding-bottom: 30px;
`;

export const Section = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 20px;
  padding-bottom: 30px;
  padding-top: 30px;
  font-weight: 700;
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

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CategoryBox = styled.div<{ isActive: boolean }>`
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.white : props.theme.colors.background};
  border: ${(props) =>
    props.isActive ? `2px solid ${props.theme.colors.background}` : 'none'};
  border-radius: 8px;
  width: 160px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
`;

export const CategoryImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const Form = styled.form`
  width: 40vw;
  background-color: ${(props) => props.theme.colors.white};
  padding: 50px;
  margin-top: 40px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  padding-bottom: 30px;


  input {
    border: none;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};

    border-radius: 8px;
    height: 28px;
    font-size: 15px;
    padding: 10px;

    margin-bottom: 4px;
  }


  @media (max-width: 1024px) {
    width: 70vw;
  }
`;
