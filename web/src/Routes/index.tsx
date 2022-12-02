import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { RouteProps as ReactDOMRouteProps } from 'react-router-dom';

interface RoutesProps extends ReactRouteProps {
  isPrivate?: boolean;
}

export const Route = ({ isPrivate = false }) => {
  const { user } = useContext(AuthContext);

};
