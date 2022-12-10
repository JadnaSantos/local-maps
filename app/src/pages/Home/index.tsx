import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  CategoriesContainer,
  CategoriesImage,
  CategoriesItem,
  CategoriesText,
  Container,
  Content,
  SubTitle,
  Title
} from "./styles";
import MapView, { Marker } from "react-native-maps";
import { Button, FlatList, View, ActivityIndicator } from "react-native";
import { categories } from "./categories";
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
  const [filter, setFilter] = useState('')
  const navigation = useNavigation()

  const filterData = markers.filter((marker) => marker.category === filter)

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
          initialRegion={{
            latitude: markers[0].latitude,
            longitude: markers[0].longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {(filter ? filterData : markers).map((item) => {
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

        <CategoriesContainer>
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            contentContainerStyle={{
              alignItems: 'center',
            }}
            renderItem={({ item }) => (
              <CategoriesItem
                onPress={() => {
                  setFilter(filter === item.key ? "" : item.key)
                }}
                key={item.key}
              >
                <CategoriesImage source={item.image} />
                <CategoriesText>{item.label}</CategoriesText>
              </CategoriesItem>
            )}
          />
        </CategoriesContainer>


        <Button title='Sair' onPress={signOut} />
      </Container>
    </>

  )
}
