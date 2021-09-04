import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'

interface IProps {
  title: string
  onPress: () => void
}

const PrimaryButton = (props: IProps) => {
  const { title, onPress } = props

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.CeladonBlue,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: Colors.White,
    textAlign: 'center',
  },
})

export default PrimaryButton
