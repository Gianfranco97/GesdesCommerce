import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import Colors from '../../constants/Colors'
import PrimaryButton from '../PrimaryButton'

const LoginFrom = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    console.log('login!!!!')
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Correo</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUserName}
          value={userName}
          placeholder="juanito@perez.es"
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

        <PrimaryButton title="Enviar" onPress={login} />
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
