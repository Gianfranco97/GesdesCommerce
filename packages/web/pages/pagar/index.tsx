import React from 'react'
import { Text } from 'react-native'
import LoggedLayout from 'shared/src/layouts/LoggedLayout'
import withAuth from 'shared/src/hocs/withAuth'

const PayPage = () => {
  return (
    <LoggedLayout>
      <Text>Para un futuro [WIP]</Text>
    </LoggedLayout>
  )
}

export default withAuth(PayPage)
