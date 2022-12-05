import { Input } from '../../components/Input';
import { Button, ButtonContainer, Container, Content, MapContainer, CategoryContainer } from './styles';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { TileLayer, Marker } from 'react-leaflet';
import { LatLngExpression, } from 'leaflet';
import categories from './categories';

const FormValidationRegisterSchema = zod.object({
  name: zod.string(),
  description: zod.string(),
  contact: zod.string(),
  category: zod.string(),
  coords: zod.number(),
});


type SchemaFields = zod.infer<typeof FormValidationRegisterSchema>


export const Register = () => {
  const FormValidation = useForm<SchemaFields>({
    resolver: zodResolver(FormValidationRegisterSchema)
  });

  const { handleSubmit, register, reset } = FormValidation;

  async function handleRegisterCategories(data: SchemaFields) {
    console.log('AQUI', data);

    reset();
  }


  return (
    <Container>
      <Content>
        <h1>Cadastro do comércio local</h1>

        <span>Dados</span>

        <form onSubmit={handleSubmit(handleRegisterCategories)}>

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

          <span>Endereço</span>

          <MapContainer center={
            {
              lat: 12,
              lng: 23
            } as LatLngExpression
          }
            zoom={13}
            whenCreated={() => console.log('test')}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker
              position={[12, 23] as LatLngExpression} />
          </MapContainer>


          <span>Categoria</span>

          {/* <CategoryContainer>

          </CategoryContainer> */}

          {/* <ButtonContainer>
            <Button type="submit">Salvar</Button>
          </ButtonContainer> */}
        </form>
      </Content>
    </Container>
  );
};
