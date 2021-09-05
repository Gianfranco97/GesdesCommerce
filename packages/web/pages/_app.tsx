import React from 'react'
import type { AppProps } from 'next/app'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import theme from 'shared/src/assets/custom-theme.json'
import '../styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />

      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Component {...pageProps} />
      </ApplicationProvider>
    </>
  )
}

export default MyApp
