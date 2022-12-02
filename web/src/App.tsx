import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './contexts/AuthContext';
import { Router } from './Routes/Routes';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme/defauld';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <Router />
      </AuthProvider >
      <GlobalStyle />
    </ThemeProvider>
  );
}

