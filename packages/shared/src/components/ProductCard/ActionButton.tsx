import React from 'react'
import { Button } from '@ui-kitten/components'
import IProduct from '../../types/IPoduct'

interface IProps {
  product: IProduct
}

const ActionButton = (props: IProps) => {
  const { product } = props

  return (
    <Button onPress={() => console.log('+ Add', product.title)}>
      + Agregar al carrito
    </Button>
  )
}

export default ActionButton
