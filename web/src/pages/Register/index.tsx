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
import { api } from '../../service/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const FormValidationRegisterSchema = zod.object({
  name: zod.string(),
  description: zod.string(),
  contact: zod.string(),
  category: zod.string(),
  adress: zod.string(),
});


type SchemaFields = zod.infer<typeof FormValidationRegisterSchema>

export const Register = () => {
  const navigate = useNavigate();

  const FormValidation = useForm<SchemaFields>({
    resolver: zodResolver(FormValidationRegisterSchema)
  });

  const { handleSubmit, register, reset } = FormValidation;

  async function onSubmit(data: SchemaFields) {
    try {
      const { name, description, contact, category, adress } = data;

      console.log(data, 'data');

      await api.post('/store', {
        name, description, contact, category, adress
      });

      reset();

      navigate('/home');

    } catch (error) {
      toast.error('Ocorreu um erro, por favor tente mais tarde');
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

          <Input
            placeholder='Categoria'
            type='text'
            required
            {...register('category')}
          />

          <span>Endereço</span>


          <Input
            placeholder='Endereço'
            type='text'
            {...register('adress')}
          />


          <ButtonContainer>
            <Button type="submit">Salvar</Button>
          </ButtonContainer>
        </form>
      </Content>
    </Container >
  );
};
