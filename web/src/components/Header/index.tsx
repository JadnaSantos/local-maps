import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';
import { SignOut } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

export const Header = () => {
  const { singOut } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate('/home');
  }

  return (
    <Container>
      <Content onClick={handleLogoClick} title="Home">
        <img src={logo} alt="logo" />

        <button onClick={singOut}>
          Sair
          <SignOut
            color='#322153'
            size={24}
          />
        </button>
      </Content>
    </Container>
  );
};
