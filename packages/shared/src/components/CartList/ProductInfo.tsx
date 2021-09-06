import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import Colors from '../../constants/Colors'
import IProduct from '../../types/IPoduct'

interface IProps {
  product: IProduct
}

const ProductInfo = (props: IProps) => {
  const { product } = props

  return (
    <Layout style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />

      <Layout>
        <Text style={styles.title}>{product.title}</Text>

        <Text>
          <Text style={styles.attributeTitle}>Precio: </Text> {product.price}
        </Text>

        <Text>
          <Text style={styles.attributeTitle}>Cantidad: </Text> 1
        </Text>
      </Layout>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 2,
    borderColor: Colors.MintCream,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 15,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
  },
  attributeTitle: {
    fontWeight: 'bold',
  },
})

export default ProductInfo
