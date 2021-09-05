import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import LoggedLayout from 'shared/src/layouts/LoggedLayout'
import ProductList from 'shared/src/components/ProductList'
import withAuth from 'shared/src/hocs/withAuth'
import api from '../../../shared/src/utils/api'

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getProducts = async () => {
    try {
      const res = await api.getAllProducts()
      console.log('res', res)

      setProducts(res)
      setLoading(false)
    } catch (error) {
      console.log('Error', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <LoggedLayout>
      {loading ? <Text>Cargando...</Text> : <ProductList products={products} />}
    </LoggedLayout>
  )
}

export default withAuth(ProductsPage)
