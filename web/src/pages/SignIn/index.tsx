import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';
import { Envelope, Lock, SignIn as Login } from 'phosphor-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';

const FormValidationSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8, 'Password must contain at least 8 character(s)')
});

type SchemaFields = zod.infer<typeof FormValidationSchema>

export const SignIn = () => {
  const navigate = useNavigate();
  const { user, singIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const FormValidation = useForm<SchemaFields>({
    resolver: zodResolver(FormValidationSchema)
  });

  const { handleSubmit, register, reset } = FormValidation;

  async function handleLogin(data: SchemaFields) {
    try {
      const { email, password } = data;

      setLoading(true);

      await singIn({
        email, password
      });

      reset();
      navigate('/home');
    } catch (err) {
      toast.error('Erro insperado, por favor, tente mais tarde');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt='logo' />

        <form onSubmit={handleSubmit(handleLogin)}>
          <h4>Faça seu login</h4>

          <Input
            icon={Envelope}
            placeholder='E-mail'
            type='email'
            required
            {...register('email')}
            {...inputRef}
          />

          <Input
            icon={Lock}
            type='password'
            placeholder='Senha'
            {...register('password')}
            {...inputRef}
          />

          <Button
            type='submit'
            loading={loading}
          >
            Entrar
          </Button>

          <a href='forgot'>Esqueci minha senha</a>
        </form>

        <Link to='/sing-up'>
          <Login size={12} />
          Criar Conta
        </Link>
      </Content>
    </Container>
  );
};
