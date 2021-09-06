import React, { useCallback, useEffect, useState } from 'react'
import LoggedLayout from 'shared/src/layouts/LoggedLayout'
import ProductList from 'shared/src/components/ProductList'
import { Spinner } from '@ui-kitten/components'
import withAuth from 'shared/src/hocs/withAuth'
import api from 'shared/src/utils/api'

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [productsCategories, setProductsCategories] = useState([])
  const [loading, setLoading] = useState(true)

  const getProducts = useCallback(async () => {
    try {
      const newProducts = await api.getAllProducts()
      const newCategories = await api.getAllProductCategories()

      setProducts(newProducts)
      setProductsCategories(newCategories)
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
        <ProductList
          products={products}
          productsCategories={productsCategories}
        />
      )}
    </LoggedLayout>
  )
}

export default withAuth(ProductsPage)
