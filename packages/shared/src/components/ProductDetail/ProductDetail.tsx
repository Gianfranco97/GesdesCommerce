import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import { Text, Layout, Button, Spinner } from '@ui-kitten/components'
import IProduct from '../../types/IPoduct'
import Colors from '../../constants/Colors'
import api from '../../utils/api'

interface IProps {
  product: IProduct
}

const ProductDetail = (props: IProps) => {
  const { product } = props
  const [isAdding, setIsAdding] = useState(false)

  const addToCart = async () => {
    try {
      setIsAdding(true)
      await api.addToCart({ productId: product.id, quantity: 1 })
      setIsAdding(false)
    } catch (error) {
      setIsAdding(false)
      console.log('error', error)
    }
  }

  return (
    <Layout style={styles.container}>
      <Layout>
        <Image source={{ uri: product.image }} style={styles.image} />
      </Layout>
      <Layout style={styles.ifcoContainer} level="2">
        <Text style={styles.title}>{product.title}</Text>

        <Text style={styles.category}>{product.category}</Text>

        <Text style={styles.price}>${product.price}</Text>

        <Text>{product.description}</Text>

        {isAdding ? (
          <Spinner />
        ) : (
          <Button style={styles.button} onPress={addToCart}>
            + Add to cart
          </Button>
        )}
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
    padding: 25,
  },
  title: {
    fontSize: 38,
    marginBottom: 5,
  },
  category: {
    backgroundColor: Colors.PoderBlue,
    fontSize: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  price: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {},
  button: {
    marginTop: 20,
    alignSelf: 'flex-start',
  },
})

export default ProductDetail
