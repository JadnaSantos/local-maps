import { Container, TextInput, Icon } from './styles';
import { TextInputProps } from 'react-native'

interface InputProps extends TextInputProps {
  name?: string;
  value: string;
  icon: string;
}

export function Input({ icon, value, ...rest }: InputProps) {
  return (
    <Container>
      <Icon name={icon} size={20} color='#666360' />
      <TextInput
        placeholderTextColor='#6C6C80'
        {...rest}
      />
    </Container>
  )
}
