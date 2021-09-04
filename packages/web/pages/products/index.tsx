import React, { useEffect, useState } from 'react'
import LoggedLayout from 'shared/src/layouts/LoggedLayout'
import ProductList from 'shared/src/components/ProductList'
import withAuth from 'shared/src/hocs/withAuth'
import { useRouter } from 'next/router'
import api from '../../../shared/src/utils/api'

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getProducts = async () => {
    try {
      const res = await api.getAllProducts()
      console.log('res', res);

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

  const router = useRouter()

  return (
    <LoggedLayout
      onLogout={() => {
        localStorage.clear()
        router.push('/')
      }}
    >
      <ProductList products={products} />
    </LoggedLayout>
  )
}

export default withAuth(ProductsPage)
