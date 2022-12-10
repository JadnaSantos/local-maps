import { Container, Content, LinkTo } from './styles';
import { ArrowRight, Plus } from 'phosphor-react';
import { TileLayer, MapContainer, Popup, Marker } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { mapIcon } from '../../utils/MapIcon';
import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import { toast } from 'react-toastify';

export interface StoreProps {
  id: string;
  name: string;
  description: string;
  category: string;
  contact: string;
  latitude: number;
  longitude: number;
}


export const StoresMap = () => {
  const [stores, setStores] = useState<StoreProps[]>([]);

  async function loadStore() {
    try {
      const response = await api.get('/store');
      setStores(response.data);

    } catch (error) {
      toast.error('Erro insperado, por favor, tente mais tarde');
    }
  }

  useEffect(() => {
    loadStore();
  }, []);


  return (
    <>
      <Container>
        <Content>
          <h2>Escolha um comércio no mapa</h2>

          <footer>
            <strong>São Paulo</strong>
          </footer>
        </Content>

        <MapContainer
          center={[-23.55052, -46.633308]}
          zoom={13}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {stores.map((item) => {
            return (
              <Marker
                key={item.id}
                position={[item.latitude, item.longitude]}
                icon={mapIcon}
              >
                <Popup closeButton={false}
                  minWidth={240}
                  maxWidth={240}
                >
                  <Link to={`/store/${item.id}`}>
                    <ArrowRight size={23} color='#000' />
                  </Link>
                  {item.name}
                </Popup>

              </Marker>
            );
          })}
        </MapContainer>


        <LinkTo to="/register">
          <Plus size={20} color=' #f0f0f0' />
        </LinkTo>
      </Container>
    </>
  );
};
