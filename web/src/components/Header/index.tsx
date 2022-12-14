import React from 'react';
import {
  Container,
  Content,
  HeaderItem,
  HeaderItems
} from './styles';
import logo from '../../assets/logo.svg';
import { SignOut } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const Header = () => {
  const navigate = useNavigate();
  const { singOut } = useAuth();

  function handleLogoClick() {
    navigate('/home');
  }

  function handleExploreStoreClick() {
    navigate('/explorer-map');
  }

  function handleDetailsStoreClick() {
    navigate('/register');
  }

  return (
    <Container>
      <Content onClick={handleLogoClick} title="Home">
        <img data-testid="image" src={logo} alt="logo" />
      </Content>

      <HeaderItems>
        <HeaderItem onClick={handleExploreStoreClick}>Explorar</HeaderItem>
        <HeaderItem onClick={handleDetailsStoreClick}>Cadastrar</HeaderItem>

        <HeaderItem onClick={singOut}>
          <SignOut
            color='#322153'
            size={24}
          />
        </HeaderItem>

      </HeaderItems>

    </Container>
  );
};
