import { PropsWithChildren, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';


export const PrivateRouter = ({ children }: PropsWithChildren) => {
  const { user } = useContext(AuthContext);

  return user ? <>{children}</> : <Navigate to="/" />;
};
