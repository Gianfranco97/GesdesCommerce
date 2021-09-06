import React from 'react'
import { StyleSheet, Linking } from 'react-native'
import { Input, Layout, Button, Text } from '@ui-kitten/components'
import useUserAuth from '../../hooks/useUserAuth'

interface IProps {
  onSuccessLogin: (token: string) => void
  goToRegister: () => void
}

const LoginFrom = (props: IProps) => {
  const { onSuccessLogin, goToRegister } = props
  const { userName, setUserName, password, setPassword, login } = useUserAuth({
    onSuccessLogin,
  })

  return (
    <Layout>
      {/* ---- Mensaje de dasarrollo ---- */}
      <Layout style={styles.infoContainer} level="4">
        <Text>
          [En Desarrollo] De momento el API solo deja hacer login con
          determinados usuarios.
        </Text>

        <Text>
          <Text style={{ fontWeight: 'bold' }}>username: </Text> hopkins
        </Text>

        <Text>
          <Text style={{ fontWeight: 'bold' }}>password: </Text> William56$hj
        </Text>

        <Text>
          Lista de todos los usuarios validos:{' '}
          <Text
            style={{ color: 'blue' }}
            onPress={() => Linking.openURL('https://fakestoreapi.com/users')}
          >
            https://fakestoreapi.com/users
          </Text>
        </Text>
      </Layout>
      {/* -------- */}

      <Layout style={styles.form} level="3">
        <Text style={styles.title}>Iniciar sesión</Text>

        <Input
          label="Usuario"
          style={styles.input}
          onChangeText={setUserName}
          value={userName}
          placeholder="juanito"
          keyboardType="email-address"
        />

        <Input
          label="Contraseña"
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Abc1234!"
          secureTextEntry
        />

        <Button onPress={goToRegister} appearance="ghost">
          ¿no tienes un usuario?
        </Button>

        <Button style={styles.button} onPress={login}>
          Enviar
        </Button>
      </Layout>
    </Layout>
  )
}

const styles = StyleSheet.create({
  infoContainer: {
    padding: 20,
    borderRadius: 15,
    alignSelf: 'center',
    width: '90%',
    maxWidth: 900,
    marginVertical: 40,
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
  },
  input: {
    padding: 10,
  },
  button: {
    marginTop: 10,
  },
})

export default LoginFrom
