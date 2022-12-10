import { TileLayer, Marker, useMapEvents } from 'react-leaflet';
import {
  Button,
  ButtonContainer,
  Container, Form, FormTitle, MapContainer, Section,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { api } from '../../service/api';
import { mapIcon } from '../../utils/MapIcon';


export const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [category, setCategory] = useState('');


  async function handleSubmit(event: FormEvent) {
    try {
      event.preventDefault();

      const { latitude, longitude } = position;
      console.log(position);

      const data = new FormData();


      data.append('name', name);
      data.append('description', description);
      data.append('category', category);
      data.append('contact', contact);
      data.append('latitude', String(latitude));
      data.append('longitude', String(longitude));

      await api.post('/store', data);
      console.log(data);

      navigate('/home');

    } catch (error) {
      console.log(error);
    }
  }

  function AddMarkerToClick() {
    const map = useMapEvents({
      click(event) {
        const { lat, lng } = event.latlng;
        setPosition({
          latitude: lat,
          longitude: lng,
        });
      },
    });

    return (
      position.latitude !== 0 ? (
        <Marker
          position={[position.latitude, position.longitude]}
          interactive={false}
          icon={mapIcon}
        />
      ) : null
    );
  }




  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Cadastro do Comércio Local</FormTitle>

        <Section>Dados</Section>

        <input
          placeholder='Nome'
          type='text'
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <input
          placeholder='Descrição'
          type='text'
          value={description}
          onChange={event => setDescription(event.target.value)}
        />

        <input
          placeholder='Contato'
          type='number'
          value={contact}
          onChange={event => setContact(event.target.value)}
        />

        <Section>Endereço</Section>


        <MapContainer
          center={[-23.55052, -46.633308]}
          style={{ width: '100%', height: 280 }}
          zoom={15}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <AddMarkerToClick />

        </MapContainer>

        <Section>Categoria</Section>

        <input
          placeholder='Categoria'
          type='text'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <ButtonContainer>
          <Button type="submit">Salvar</Button>
        </ButtonContainer>
      </Form>
    </Container >
  );
};
