import { Container, Toast } from './styles';
import { WarningCircle, XCircle } from 'phosphor-react';

export const Toasts = () => {
  return (
    <Container>
      <Toast type='success'>
        <WarningCircle size={20} />

        <div>
          <strong>Aconteceu um error</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type='button'>
          <XCircle size={18} />
        </button>
      </Toast>

      <Toast type='errror'>
        <WarningCircle size={20} />

        <div>
          <strong>Aconteceu um error</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type='button'>
          <XCircle size={18} />
        </button>
      </Toast>

      <Toast type='info'>
        <WarningCircle size={20} />

        <div>
          <strong>Aconteceu um error</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type='button'>
          <XCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};
