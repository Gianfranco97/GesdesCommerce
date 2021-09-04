import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native'

interface IProps {
  children: JSX.Element | Array<JSX.Element>
}

export default function BasicLayout(props: IProps) {
  const { children } = props

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
})
