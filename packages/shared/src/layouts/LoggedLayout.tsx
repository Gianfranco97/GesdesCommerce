import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import BasicLayout from './BasicLayout'

interface IProps {
  children: JSX.Element | Array<JSX.Element>
}

export default function LoggedLayout(props: IProps) {
  const { children } = props
  const onLogout = () => {
    console.log('holiss mobil')
  }
  const openCart = () => {
    console.log('holiss mobil')
  }

  return (
    <BasicLayout>
      <>
        <TouchableOpacity onPress={onLogout}>
          <Text>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openCart}>
          <Text>Carrito</Text>
        </TouchableOpacity>

        {children}
      </>
    </BasicLayout>
  )
}

const styles = StyleSheet.create({})