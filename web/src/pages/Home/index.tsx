import { Container, Content, HomeImage, Button, ButtonBox } from './styles';
import backgroundMapsImage from '../../assets/backgroundMapsImage.svg';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'phosphor-react';

export const Home = () => {
  return (
    <Container>
      <Content>
        <h1>O mapa local de sua cidade</h1>
        <span>Encontre no comércio local tudo o que precisa!</span>

        <Link to='/register'>
          <Button>
            <ButtonBox>
              <ArrowRight size={24} />
            </ButtonBox>
            Cadastre um ponto comercial
          </Button>
        </Link>

      </Content>
      <HomeImage>
        <img src={backgroundMapsImage} />
      </HomeImage>
    </Container>
  );
};
