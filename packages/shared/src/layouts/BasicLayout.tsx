import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native'
import { Layout } from '@ui-kitten/components'

interface IProps {
  children: JSX.Element | Array<JSX.Element>
}

export default function BasicLayout(props: IProps) {
  const { children } = props

  return (
    <Layout>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        {children}
      </ScrollView>
    </Layout>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
})
