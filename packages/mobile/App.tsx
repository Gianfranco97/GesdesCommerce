import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import * as eva from '@eva-design/eva'
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
} from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import customTheme from 'shared/src/assets/custom-theme.json'
import AppNavigator from './src/navigation'

function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />

      <ApplicationProvider {...eva} theme={{ ...eva.light, ...customTheme }}>
        <Layout style={{ flex: 1 }}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </Layout>
      </ApplicationProvider>
    </>
  )
}

export default App
