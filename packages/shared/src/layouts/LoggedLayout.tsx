import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import BasicLayout from './BasicLayout'

interface IProps {
  children: JSX.Element | Array<JSX.Element>
  onLogout: () => void
}

export default function LoggedLayout(props: IProps) {
  const { children, onLogout } = props

  return (
    <BasicLayout>
      <>
        <TouchableOpacity onPress={onLogout}>
          <Text>Close</Text>
        </TouchableOpacity>

        {children}
      </>
    </BasicLayout>
  )
}

const styles = StyleSheet.create({})
