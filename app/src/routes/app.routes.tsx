import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Screen
        name="details"
        component={Details}
        options={{ headerShown: false }}
      />
    </Navigator>
  )
}

