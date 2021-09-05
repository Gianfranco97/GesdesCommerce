import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import IProduct from '../../types/IPoduct'
import ProductInfo from './ProductInfo'

interface IProps {
  products: Array<IProduct>
  goToPayPage: () => void
}

const CartList = (props: IProps) => {
  const { products, goToPayPage } = props
  const totalToPay = products.reduce((acc, product) => acc + product.price, 0)

  return (
    <View style={styles.container}>
      <View style={styles.productList}>
        {products.map((product) => (
          <ProductInfo key={product.id.toString()} product={product} />
        ))}
      </View>

      <Text style={styles.totalToPay}>
        Total a pagar: $<Text>{totalToPay}</Text>
      </Text>

      <TouchableOpacity style={styles.payButton} onPress={goToPayPage}>
        <Text style={styles.payButtonText}>Pagar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  productList: {},
  totalToPay: {
    fontSize: 24,
  },
  payButton: {
    backgroundColor: Colors.CeladonBlue,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 15,
    maxWidth: 280,
  },
  payButtonText: {
    color: Colors.White,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default CartList
