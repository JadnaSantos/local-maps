import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';
import { ArrowLeft, Envelope, Lock, User } from 'phosphor-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../service/api';
import { toast } from 'react-toastify';

const FormValidationSignupSchema = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  password: zod.string().min(8, 'Password must contain at most 8 character(s)')

});

type SchemaFields = zod.infer<typeof FormValidationSignupSchema>

export const SignUp = () => {
  const navigate = useNavigate();
  const FormValidation = useForm<SchemaFields>({
    resolver: zodResolver(FormValidationSignupSchema)
  });

  const { handleSubmit, register, reset } = FormValidation;

  async function handleSignup(data: SchemaFields) {
    try {
      const { name, email, password } = data;

      await api.post('/users', {
        name, email, password
      });

      reset();

      toast.success('Usuario Cadastro realizado com sucesso');

      navigate('/');

    } catch (error) {
      toast.error('Ocorreu um erro ao cadastrar, por favor, tente mais tarde');
    }
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt='logo' />

        <form onSubmit={handleSubmit(handleSignup)}>
          <h4>Faça seu login</h4>

          <Input
            icon={User}
            placeholder='Nome'
            required
            {...register('name')}
          />
          <Input
            icon={Envelope}
            placeholder='E-mail'
            required
            {...register('email')}
          />
          <Input
            icon={Lock}
            placeholder='Senha'
            {...register('password')}
          />

          <Button
            type='submit'
          >
            Cadastrar
          </Button>

        </form>

        <Link to='/'>
          <ArrowLeft size={12} />
          Voltar para login
        </Link>
      </Content>
    </Container>
  );
};
