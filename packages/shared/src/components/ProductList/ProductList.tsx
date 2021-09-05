import React from 'react'
import { StyleSheet, View } from 'react-native'
import IProduct from '../../types/IPoduct'
import ProductCard from '../ProductCard'

interface IProps {
  products: Array<IProduct>
}

const ProductList = (props: IProps) => {
  const { products } = props

  return (
    <View style={styles.container}>
      <View style={styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.id.toString()} product={product} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 60,
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 1400,
  },
})

export default ProductList
