import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import IProduct from '../../types/IPoduct'

interface IProps {
  product: IProduct
}

const ProductCard = (props: IProps) => {
  const { product } = props

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: product.image }} />
        </View>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 25,
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 380,
    borderRadius: 15,
    padding: 15,
  },
  card: {
    width: 240,
  },
  imageContainer: {
    alignItems: 'center'
  },
  image: {
    height: 180,
    width: 180,
    resizeMode: 'contain',
    marginBottom: 25,
  },
  title: {
    fontSize: 16,
  },
  price: {
    marginVertical: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
  },
})

export default ProductCard
