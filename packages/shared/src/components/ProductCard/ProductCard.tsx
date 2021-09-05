import React from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native'
import { Text } from '@ui-kitten/components'
import { useRouter } from 'next/router'
import { useLinkTo, useNavigation } from '@react-navigation/native'
import Colors from '../../constants/Colors'
import IProduct from '../../types/IPoduct'
import ActionButton from './ActionButton'

interface IProps {
  product: IProduct
}

const ProductCard = (props: IProps) => {
  const { product } = props
  const router = useRouter()
  const linkTo = useLinkTo()
  const navigation = useNavigation()

  const goToProductDetail = () => {
    if (Platform.OS === 'web') {
      router.push(`/products/${product.id}`)
    } else {
      linkTo(`/SingleProduct/`, { id: product.id })
      navigation.navigate({ key: "SingleProduct" }, { id: product.id })
    }
  }

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={goToProductDetail}>
      <View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: product.image }} />
        </View>

        <Text style={styles.category}>{product.category}</Text>

        <Text style={styles.title}>{product.title}</Text>

        <Text style={styles.price}>${product.price}</Text>
      </View>

      <ActionButton product={product} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 260,
    margin: 25,
    justifyContent: 'space-between',
    backgroundColor: Colors.White,
    borderWidth: 3,
    borderColor: Colors.MintCream,
    borderRadius: 15,
    padding: 25,
  },
  imageContainer: {
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 3,
    borderColor: Colors.MintCream,
    marginBottom: 20,
  },
  image: {
    height: 180,
    width: 180,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
  },
  category: {
    backgroundColor: Colors.MintCream,
    fontSize: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
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
