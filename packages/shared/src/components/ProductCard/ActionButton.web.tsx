import React from 'react'
import IProduct from '../../types/IPoduct'
import PrimaryButton from '../PrimaryButton'

interface IProps {
  product: IProduct
}

const ActionButton = (props: IProps) => {
  const { product } = props

  return (
    <PrimaryButton
      title="Ver"
      onPress={() => console.log('Ver', product.title)}
    />
  )
}

export default ActionButton
