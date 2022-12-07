import { Container, ButtonText } from "./styles";
import { RectButtonProperties } from 'react-native-gesture-handler'


interface ButtonProps extends RectButtonProperties {
  children: string;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  )
}
