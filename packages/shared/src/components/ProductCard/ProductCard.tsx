import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import IProduct from '../../types/IPoduct'
import PrimaryButton from '../PrimaryButton'

interface IProps {
  product: IProduct
}

const ProductCard = (props: IProps) => {
  const { product } = props

  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: product.image }} />
        </View>

        <Text style={styles.title}>{product.title}</Text>

        <Text style={styles.price}>${product.price}</Text>
      </View>

      <PrimaryButton
        title="+ Agregar al carrito"
        onPress={() => console.log('+ Add', product.title)}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 260,
    margin: 25,
    justifyContent: 'space-between',
    backgroundColor: Colors.White,
    borderRadius: 15,
    padding: 25,
  },
  imageContainer: {
    alignItems: 'center',
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
    paddingTop: 10,
    paddingBottom: 30,
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.ImperialRed,
  },
})

export default ProductCard
