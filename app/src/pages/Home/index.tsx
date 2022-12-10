import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  Container,
  Content,
  SubTitle,
  Title
} from "./styles";
import MapView, { Marker } from "react-native-maps";
import { Button } from "react-native";
import { api } from "../../services/api";
import { useNavigation } from "@react-navigation/native";

export interface IMarker {
  category: string;
  contact: string;
  description: string;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
}

export function Home() {
  const { signOut } = useContext(AuthContext)

  const [markers, setMarkes] = useState<IMarker[]>([])
  const navigation = useNavigation()

  async function loadData() {
    try {
      const response = await api.get('/store')

      setMarkes(response.data)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <Container>
        <Content>
          <Title>Bem Vindo</Title>
          <SubTitle>Encontre no mapa um ponto do comércio local</SubTitle>
        </Content>

        <MapView
          style={{ flex: 1 }}
        // initialRegion={{
        //   latitude: markers[0].latitude,
        //   longitude: markers[0].longitude,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421
        // }}
        >
          {(markers).map((item) => {
            return (
              <Marker
                key={item.id}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude
                }}
                onPress={() => {
                  navigation.navigate('details', {
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    category: item.category,
                    contact: item.contact,
                    latitude: item.latitude,
                    longitude: item.longitude
                  })
                }}
              />
            )
          })}
        </MapView>

        <Button title='Sair' onPress={signOut} />
      </Container>
    </>

  )
}
