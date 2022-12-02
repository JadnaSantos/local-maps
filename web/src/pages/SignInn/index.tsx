import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';
import { Envelope, Lock, SignIn } from 'phosphor-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const FormValidationSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8, 'Password must contain at least 8 character(s)')
});

type SchemaFields = zod.infer<typeof FormValidationSchema>

export const SignInn = () => {
  const { user, singIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const FormValidation = useForm<SchemaFields>({
    resolver: zodResolver(FormValidationSchema)
  });

  const { handleSubmit, register, reset } = FormValidation;

  async function handleLogin(data: SchemaFields) {
    const { email, password } = data;

    setLoading(true);

    await singIn({
      email, password
    });

    setLoading(false);

    reset();
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
          <SignIn size={12} />
          Criar Conta
        </Link>
      </Content>
    </Container>
  );
};
