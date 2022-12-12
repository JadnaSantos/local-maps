import { TileLayer, Marker, useMapEvents } from 'react-leaflet';
import {
  Button,
  ButtonContainer,
  Container, Form, FormTitle, MapContainer, Section,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../service/api';
import { mapIcon } from '../../utils/MapIcon';
import { Input } from '../../components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { toast } from 'react-toastify';

const FormValidationSchema = zod.object({
  name: zod.string(),
  description: zod.string(),
  contact: zod.string(),
  category: zod.string(),
});

type SchemaFields = zod.infer<typeof FormValidationSchema>


export const Register = () => {
  const navigate = useNavigate();

  const FormValidation = useForm<SchemaFields>({
    resolver: zodResolver(FormValidationSchema)
  });

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const { handleSubmit, register, reset } = FormValidation;


  async function onSubmit(data: SchemaFields) {
    try {

      const { name, description, contact, category } = data;

      const { latitude, longitude } = position;

      await api.post('/store', {
        name, description, contact, category, latitude, longitude
      });

      reset();

      toast.success('Cadastro realizado com sucesso');

      navigate('/home');

    } catch (error) {
      toast.error('Não foi possivel cadastrar, por favor, tente mais tarde ');
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Cadastro do Comércio Local</FormTitle>

        <Section>Dados</Section>

        <Input
          placeholder='Nome'
          type='text'
          required
          {...register('name')}
        />

        <Input
          placeholder='Descrição'
          type='text'
          required
          {...register('description')}
        />

        <Input
          placeholder='Contato'
          type='number'
          required
          {...register('contact')}
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

        <Input
          placeholder='Categoria'
          type='text'
          required
          {...register('category')}
        />

        <ButtonContainer>
          <Button type="submit">Salvar</Button>
        </ButtonContainer>
      </Form>
    </Container >
  );
};
