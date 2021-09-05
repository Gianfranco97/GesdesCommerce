import React from 'react'
import { View, TextInput, StyleSheet, Text, Linking } from 'react-native'
import { Button } from '@ui-kitten/components'
import Colors from '../../constants/Colors'
import useUserAuth from '../../hooks/useUserAuth'

interface IProps {
  onSuccessLogin: (token: string) => void
}

const LoginFrom = (props: IProps) => {
  const { onSuccessLogin } = props
  const { userName, setUserName, password, setPassword, login } = useUserAuth({
    onSuccessLogin,
  })

  return (
    <View style={styles.container}>
      {/* ---- Mensaje de dasarrollo ---- */}

      <View>
        <Text>
          [En Desarrollo] De momento el API solo deja hacer login con
          determinados usuarios.
        </Text>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>username: </Text> hopkins{' '}
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
      </View>

      {/* -------- */}

      <View style={styles.form}>
        <Text>Usuario</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUserName}
          value={userName}
          placeholder="juanito"
          keyboardType="email-address"
          autoFocus
        />

        <Text>Contraseña</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Abc1234!"
          secureTextEntry
        />

        <Button onPress={login}>Enviar</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    maxWidth: 800,
    minWidth: 400,
    margin: 40,
    padding: 40,
    borderRadius: 15,
    backgroundColor: Colors.MintCream,
    borderWidth: 1,
    borderColor: Colors.CeladonBlue,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
  },
})

export default LoginFrom
