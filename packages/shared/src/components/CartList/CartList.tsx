import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Button, Text } from '@ui-kitten/components'
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
    <Layout style={styles.container}>
      <Text style={styles.title}>Mi carrito</Text>

      <Layout style={styles.productList}>
        {products.map((product) => (
          <ProductInfo key={product.id.toString()} product={product} />
        ))}
      </Layout>

      <Text style={styles.totalToPay}>Total a pagar: ${totalToPay}</Text>

      <Button style={styles.payButton} onPress={goToPayPage}>
        Pagar
      </Button>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 32,
  },
  productList: {},
  totalToPay: {
    fontSize: 24,
    marginTop: 10,
  },
  payButton: {
    backgroundColor: Colors.CeladonBlue,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 15,
    maxWidth: 280,
  },
})

export default CartList
