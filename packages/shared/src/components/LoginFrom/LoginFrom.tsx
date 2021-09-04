import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text, Button } from 'react-native'

const LoginFrom = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    console.log('login!!!!')
  }

  return (
    <View style={styles.container}>
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

      <Button title="Enviar" onPress={login} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 800,
    margin: 40,
    borderWidth: 1,
    padding: 40,
    borderRadius: 15,
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
