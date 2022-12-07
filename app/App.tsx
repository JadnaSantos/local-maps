import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { Routes } from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar
            backgroundColor='#F0F0F5'
            barStyle="light-content"
            translucent={false}
          />
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
