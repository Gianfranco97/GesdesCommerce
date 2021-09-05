import React from 'react'
import { Button } from '@ui-kitten/components'
import { useRouter } from 'next/router'
import IProduct from '../../types/IPoduct'

interface IProps {
  product: IProduct
}

const ActionButton = (props: IProps) => {
  const { product } = props
  const router = useRouter()

  return (
    <Button onPress={() => router.push(`/products/${product.id}`)}>Ver</Button>
  )
}

export default ActionButton
