import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import IProduct from '../../types/IPoduct'

interface IProps {
  products: Array<IProduct>
  goToPayPage: () => void
}

const ProductInfo = (props: { product: IProduct }) => {
  const { product } = props

  return (
    <View>
      <Image source={{ uri: product.image }} />

      <Text>{product.title}</Text>

      <Text>
        <Text>Precio: </Text> {product.price}
      </Text>

      <Text>
        <Text>Cantidad: </Text> 1
      </Text>
    </View>
  )
}

const CartList = (props: IProps) => {
  const { products, goToPayPage } = props
  const totalToPay = products.reduce((acc, product) => acc + product.price, 0)

  return (
    <View>
      {products.map((product) => (
        <ProductInfo key={product.id.toString()} product={product} />
      ))}

      <Text>
        Total a pagar: <Text>{totalToPay}</Text>
      </Text>

      <TouchableOpacity onPress={goToPayPage}>
        <Text>Pagar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CartList
