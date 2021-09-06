import React from 'react'
import { StyleSheet } from 'react-native'
import { Input, Layout, Button, Text } from '@ui-kitten/components'
import useUserAuth from '../../hooks/useUserAuth'

interface IProps {
  onSuccessRegister: () => void
  goToLogin: () => void
}

const RegisterFrom = (props: IProps) => {
  const { onSuccessRegister, goToLogin } = props
  const {
    email,
    setEmail,
    userName,
    setUserName,
    password,
    setPassword,
    register,
  } = useUserAuth({
    onSuccessRegister,
  })

  return (
    <Layout style={styles.container}>
      <Layout style={styles.form} level="3">
        <Text style={styles.title}>Registrarse</Text>

        <Input
          label="Correo"
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="juanito@perez.es"
          keyboardType="email-address"
          autoFocus
        />

        <Input
          label="Usuario"
          style={styles.input}
          onChangeText={setUserName}
          value={userName}
          placeholder="juanito"
        />

        <Input
          label="Contraseña"
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Abc1234!"
          secureTextEntry
        />

        <Button onPress={goToLogin} appearance="ghost">
          ¿Ya tienes un usuario?
        </Button>

        <Button style={styles.button} onPress={register}>
          Enviar
        </Button>
      </Layout>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 10,
  },
  form: {
    alignSelf: 'center',
    width: '90%',
    maxWidth: 900,
    padding: 30,
    borderRadius: 15,
    marginTop: 40,
  },
  input: {
    margin: 10,
  },
  button: {
    marginTop: 10,
  },
})

export default RegisterFrom
