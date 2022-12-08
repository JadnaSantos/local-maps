import { useContext } from "react";
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
import { Button, FlatList, View } from "react-native";
import { categories } from "./categories";

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
  return (
    <>
      <Container>
        <Content>
          <Title>Bem Vindo</Title>
          <SubTitle>Encontre no mapa um ponto do comércio local</SubTitle>
        </Content>

        <MapView style={{ flex: 1 }}>
          <Marker
            coordinate={{ latitude: 0, longitude: 0 }}
          >

          </Marker>
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
              <CategoriesItem key={item.key}>
                <CategoriesImage source={item.image} />
                <CategoriesText>{item.label}</CategoriesText>
              </CategoriesItem>
            )}
          />
        </CategoriesContainer>
      </Container>
    </>

  )
}
