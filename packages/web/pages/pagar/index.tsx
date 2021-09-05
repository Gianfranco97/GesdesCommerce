import React from 'react'
import { Text } from 'react-native'
import BasicLayout from 'shared/src/layouts/BasicLayout'
import withAuth from 'shared/src/hocs/withAuth'

const PayPage = () => {
  return (
    <BasicLayout>
      <Text>Para un futuro [WIP]</Text>
    </BasicLayout>
  )
}

export default withAuth(PayPage)
