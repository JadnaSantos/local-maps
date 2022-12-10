import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../service/api';
import { Container, Content, ContentDetails } from './styles';

interface StoreProps {
  id: string;
  name: string;
  description: string;
  category: string;
  contact: string;
  latitude: number;
  longitude: number;
}

type StoreParams = {
  id: string;
}


export const DetailsStore = () => {
  const params = useParams<StoreParams>();

  const [store, setStore] = useState<StoreProps>();

  async function getDetailsStore() {
    try {
      const response = await api.get(`/store/${params.id}`);
      setStore(response.data);

    } catch (error) {
      toast.error('Erro insperado, por favor, tente mais tarde');
    }
  }

  useEffect(() => {
    getDetailsStore();
  }, [params.id]);

  return (
    <Container>
      <Content>
        <ContentDetails>
          <h2>{store?.name}</h2>

          <span>{store?.description}</span>

          <span><strong>Contato:</strong> {store?.contact}</span>

          <footer>
            <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${store?.latitude},${store?.longitude}`}>Ver rotas no Google Map</a>
          </footer>

        </ContentDetails>
      </Content>
    </Container>
  );
};
