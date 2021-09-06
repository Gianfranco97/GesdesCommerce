import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components'
import IProduct from '../../types/IPoduct'
import ProductCard from '../ProductCard'

interface IProps {
  products: Array<IProduct>
  productsCategories: Array<string>
}

const AllProductsCategoryName = 'Todo'

const ProductList = (props: IProps) => {
  const { products, productsCategories } = props
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(
    new IndexPath(0),
  )
  const [productsToShow, setProductsToShow] = useState(products)

  const selectedCategoryName =
    productsCategories[selectedCategoryIndex.row - 1] || AllProductsCategoryName

  useEffect(() => {
    let newProductsToShow = products

    if (selectedCategoryName !== AllProductsCategoryName) {
      newProductsToShow = newProductsToShow.filter(
        (product) => product.category === selectedCategoryName,
      )
    }

    setProductsToShow(newProductsToShow)
  }, [
    selectedCategoryIndex,
    productsCategories,
    products,
    selectedCategoryName,
  ])

  return (
    <Layout style={styles.container}>
      <Select
        selectedIndex={selectedCategoryIndex}
        value={selectedCategoryName}
        onSelect={(index) => setSelectedCategoryIndex(index)}
      >
        <>
          <SelectItem title={AllProductsCategoryName} />

          {productsCategories.map((cotegory) => (
            <SelectItem key={cotegory} title={cotegory} />
          ))}
        </>
      </Select>

      <Layout style={styles.productList}>
        {productsToShow.map((product) => (
          <ProductCard key={product.id.toString()} product={product} />
        ))}
      </Layout>
    </Layout>
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
