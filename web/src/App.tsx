import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './contexts/AuthContext';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme/defauld';
import 'react-toastify/dist/ReactToastify.min.css';
import { AppRouter } from './routes';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <AppRouter />
      </AuthProvider >
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
}

