import React, { useCallback, useEffect, useState } from 'react'
import LoggedLayout from 'shared/src/layouts/LoggedLayout'
import ProductList from 'shared/src/components/ProductList'
import { Spinner } from '@ui-kitten/components'
import withAuth from 'shared/src/hocs/withAuth'
import api from 'shared/src/utils/api'
import { ScrollView } from 'react-native'

const ProductsScreen = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getProducts = useCallback(async () => {
    try {
      const res = await api.getAllProducts()

      setProducts(res)
      setLoading(false)
    } catch (error) {
      console.log('Error', error)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <LoggedLayout>
      {loading ? (
        <Spinner size="large" />
      ) : (
        <ScrollView>
          <ProductList products={products} />
        </ScrollView>
      )}
    </LoggedLayout>
  )
}

// export default withAuth(ProductsScreen)
export default ProductsScreen
