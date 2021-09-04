import React from 'react'
import * as eva from '@eva-design/eva'
import type { AppProps /* , AppContext */ } from 'next/app'
import { ApplicationProvider } from '@ui-kitten/components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Component {...pageProps} />
    </ApplicationProvider>
  )
}

export default MyApp
