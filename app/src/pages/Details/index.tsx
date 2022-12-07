import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

export function Details() {
  const { signOut } = useContext(AuthContext)
  return (
    <View>
      <Button title="Sair" onPress={signOut} />
      <Text>This is Details Page</Text>
    </View>
  )
}
