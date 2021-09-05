import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useRouter } from 'next/router'
import BasicLayout from './BasicLayout'

interface IProps {
  children: JSX.Element | Array<JSX.Element>
}

export default function LoggedLayout(props: IProps) {
  const router = useRouter()
  const { children } = props

  const onLogout = () => {
    localStorage.clear()
    router.push('/')
  }
  const openCart = () => {
    router.push('/carrito')
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
