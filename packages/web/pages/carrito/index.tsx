import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import CartList from 'shared/src/components/CartList'
import withAuth from 'shared/src/hocs/withAuth'
import api from 'shared/src/utils/api'
import LoggedLayout from 'shared/src/layouts/LoggedLayout'
import { Spinner } from '@ui-kitten/components'

const CarPage = () => {
  const router = useRouter()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getProducts = async () => {
    try {
      const res = await api.getCart()

      setProducts(res)
      setLoading(false)
    } catch (error) {
      console.log('Error', error)
      setLoading(false)
    }
  }

  const goToPayPage = () => {
    router.push('/pagar')
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <LoggedLayout>
      {loading ? (
        <Spinner size="large" />
      ) : (
        <CartList products={products} goToPayPage={goToPayPage} />
      )}
    </LoggedLayout>
  )
}

export default withAuth(CarPage)
