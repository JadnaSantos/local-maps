import { useContext, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from '../../contexts/AuthContext';
import {
  BackToSignIn,
  BackToSignInText,
  Container,
  InputContainer,
  Logo,
  Title
} from './styles';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { AppError } from '../../utils/AppError';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native'


const FormValidationSignupSchema = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  password: zod.string().min(3, { message: "Must be 5 or more characters long" })
})

type SchemaFields = zod.infer<typeof FormValidationSignupSchema>

export function SignUp() {

  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)


  const FormValidation = useForm<SchemaFields>({
    resolver: zodResolver(FormValidationSignupSchema)
  })

  const { handleSubmit, reset, control, formState: { errors } } = FormValidation

  async function onSubmit(data: SchemaFields) {
    reset()
  }


  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps='handled'
        >
          <Container>
            <Logo
              source={require('../../assets/logo.png')}
            />
            <Title>Crie sua conta</Title>
            <InputContainer>

              <Controller
                control={control}
                name="name"
                rules={{ required: 'Nome' }}
                render={({ field: { value, onChange } }) => (
                  <Input
                    placeholder="Nome"
                    icon="user"
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="email"
                rules={{ required: 'Informe o e-mail' }}
                render={({ field: { value, onChange } }) => (
                  <Input
                    placeholder="E-mail"
                    icon="mail"
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />

              <Controller
                control={control}
                name="password"
                rules={{ required: 'Informe a senha' }}
                render={({ field: { value, onChange } }) => (
                  <Input
                    placeholder="Senha"
                    value={value}
                    icon="lock"
                    onChangeText={onChange}
                    secureTextEntry
                  />
                )}
              />

              <Button onPress={handleSubmit(onSubmit)}>
                Cadastrar
              </Button>

            </InputContainer>

          </Container>
        </ScrollView>

        <BackToSignIn onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color=' #666360' />
          <BackToSignInText>Voltar</BackToSignInText>
        </BackToSignIn>
      </KeyboardAvoidingView>
    </>
  )
}
