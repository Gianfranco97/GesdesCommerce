import React from 'react'
import { Layout } from '@ui-kitten/components'

interface IProps {
  children: JSX.Element | Array<JSX.Element>
}

export default function BasicLayout(props: IProps) {
  const { children } = props

  return <Layout>{children}</Layout>
}
