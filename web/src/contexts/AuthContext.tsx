import { createContext, ReactNode, useCallback, useState } from 'react';
import { api } from '../service/api';
import { toast } from 'react-toastify';


interface AuthState {
  token: string;
  user: object;
}

interface SingInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  singIn: (credentials: SingInCredentials) => Promise<void>
  singOut(): void
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthContextProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@LocalMaps:token');
    const user = localStorage.getItem('@LocalMaps:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const singIn = useCallback(async ({ email, password }: SingInCredentials) => {
    try {
      const response = await api.post('/session', {
        email, password
      });

      const { token, user } = response.data;

      localStorage.setItem('@LocalMaps:token', token);
      localStorage.setItem('@LocalMaps:user', JSON.stringify(user));

      setData({ token, user });

      toast.success('Logado com sucess');
    } catch (error) {
      console.log(error);
      toast.error('Erro ao acessar, usuario ou senha incorreta');
    }
  }, []);


  const singOut = useCallback(() => {
    localStorage.removeItem('@LocalMaps:token');
    localStorage.removeItem('@LocalMaps:user');

    setData({} as AuthState);
  }, []);


  return (
    <AuthContext.Provider value={{ user: data.user, singIn, singOut }} >
      {children}
    </AuthContext.Provider>
  );
};

