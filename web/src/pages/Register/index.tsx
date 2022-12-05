import { Input } from '../../components/Input';
import {
  Button,
  ButtonContainer,
  Container,
  Content,
} from './styles';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { TileLayer, Marker, MapContainer } from 'react-leaflet';
import { LeafletMouseEvent, } from 'leaflet';
import { useState } from 'react';
import { mapIcon } from '../../utils/MapIcon';
import { api } from '../../service/api';
import { useNavigate } from 'react-router-dom';

const FormValidationRegisterSchema = zod.object({
  name: zod.string(),
  description: zod.string(),
  contact: zod.string(),
  category: zod.string(),
});


type SchemaFields = zod.infer<typeof FormValidationRegisterSchema>


export const Register = () => {
  const navigate = useNavigate();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const FormValidation = useForm<SchemaFields>({
    resolver: zodResolver(FormValidationRegisterSchema)
  });

  const { handleSubmit, register, reset } = FormValidation;

  async function onSubmit(data: SchemaFields) {
    try {
      const { name, description, contact, category } = data;

      console.log(data, 'data');

      await api.post('/store', {
        name, description, contact, category
      });

      reset();

      navigate('/home');

    } catch (error) {
      console.error(error);
    }
  }


  return (
    <Container>
      <Content>
        <h1>Cadastro do comércio local</h1>

        <span>Dados</span>

        <form onSubmit={handleSubmit(onSubmit)}>

          <Input
            placeholder='Nome do Local'
            type='text'
            {...register('name')}
          />

          <Input
            placeholder='Descrição'
            type='text'
            {...register('description')}
          />

          <Input
            placeholder='Contato'
            type='number'
            {...register('contact')}
          />

          <Input
            placeholder='Categoria'
            type='text'
            {...register('category')}
          />

          <span>Endereço</span>


          <MapContainer
            center={[-23.55052, -46.633308]}
            style={{ width: '100%', height: 280 }}
            zoom={15}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            {position.latitude !== 0 && (
              <Marker
                interactive={false}
                icon={mapIcon}
                position={[
                  position.latitude,
                  position.longitude
                ]}
              />
            )}

          </MapContainer>


          <ButtonContainer>
            <Button type="submit">Salvar</Button>
          </ButtonContainer>
        </form>
      </Content>
    </Container >
  );
};
