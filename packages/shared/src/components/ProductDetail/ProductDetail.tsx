import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Text, Layout } from '@ui-kitten/components'
import IProduct from '../../types/IPoduct'

interface IProps {
  product: IProduct
}

const ProductDetail = (props: IProps) => {
  const { product } = props
  return (
    <Layout style={styles.container}>
      <Layout>
        <Image source={{ uri: product.image }} style={styles.image} />
      </Layout>
      <Layout style={styles.ifcoContainer} level="2">
        <Text style={styles.title}>{product.title}</Text>

        <Text>{product.category}</Text>

        <Text>${product.price}</Text>

        <Text>{product.description}</Text>
      </Layout>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 15,
    maxWidth: 1400,
    alignSelf: 'center',
  },
  imageContainer: {},
  image: {
    minWidth: 200,
    minHeight: 200,
    resizeMode: 'contain',
  },
  ifcoContainer: {
    borderRadius: 15,
    flex: 1,
    marginHorizontal: 15,
    padding: 15,
  },
  title: {
    fontSize: 38,
    marginBottom: 5,
  },
  category: {},
  price: {},
  description: {},
})

export default ProductDetail
