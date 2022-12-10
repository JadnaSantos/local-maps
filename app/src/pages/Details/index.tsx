import { useContext, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";
import { IMarker } from "../Home";
import { useNavigation, useRoute } from '@react-navigation/native'
import { Container, Section, SubTitle, TextInfo, Title } from "./styles";

type RouteDetailsParams = {
  details: IMarker
}

type DetailsRoute = RouteProp<RouteDetailsParams, 'details'>

export function Details() {

  const { params } = useRoute<DetailsRoute>()
  const [address, setAddres] = useState<any>();
  const navigation = useNavigation();


  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${params.latitude}&lon=${params.longitude}&format=json`
    ).then(async (request) => {
      const data = await request.json();

      setAddres(data);
      navigation.setOptions({
        title: params.name,
      });
    });
  }, []);

  return (
    <Container>
      <Title>{params.name}</Title>
      <SubTitle>{params.description}</SubTitle>
      <Section>Endereço</Section>
      <TextInfo>{address?.address.road}</TextInfo>
      <TextInfo>{address?.address.city}</TextInfo>
      <TextInfo>{address?.address.postcode}</TextInfo>
      <TextInfo>{address?.address.state}</TextInfo>


      <Section>Contato</Section>
      <TextInfo>{params.contact}</TextInfo>
    </Container>
  )
}
