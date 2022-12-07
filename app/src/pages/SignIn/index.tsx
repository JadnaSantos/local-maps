import { useContext, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from '../../contexts/AuthContext';
import {
  Container,
  CreateAccountButton,
  CreateAccountText,
  ForgotPassword,
  ForgotPasswordText,
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
  email: zod.string().email(),
  password: zod.string().min(3, { message: "Must be 5 or more characters long" })
})

type SchemaFields = zod.infer<typeof FormValidationSignupSchema>


export function SignIn() {
  const navigation = useNavigation()

  const { signIn, loadingAuth } = useContext(AuthContext)

  console.log(loadingAuth)

  const FormValidation = useForm<SchemaFields>({
    resolver: zodResolver(FormValidationSignupSchema)
  })

  const { handleSubmit, reset, control } = FormValidation

  async function onSubmit(data: SchemaFields) {
    try {
      const { email, password } = data
      console.log(data)

      await signIn({
        email, password
      })

      reset()

    } catch (error) {
      console.error(error)
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível entrar. Tente novamente mais tarde.'
    }
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
            <Title>Faça o seu login</Title>
            <InputContainer>

              <Controller
                control={control}
                name="email"
                rules={{ required: 'Informe o e-mail' }}
                render={({ field: { value, onChange } }) => (
                  <Input
                    placeholder="E-mail"
                    autoCorrect={false}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    icon="mail"
                    returnKeyType='next'
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
                Acessar
              </Button>


              <ForgotPassword onPress={() => { }}>
                <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
              </ForgotPassword>
            </InputContainer>

          </Container>
        </ScrollView>
        <CreateAccountButton
          onPress={() => navigation.navigate('SignUp')}
        >
          <Icon name="log-in" size={20} color=' #666360' />
          <CreateAccountText>Criar uma conta</CreateAccountText>
        </CreateAccountButton>
      </KeyboardAvoidingView>
    </>
  )
}
