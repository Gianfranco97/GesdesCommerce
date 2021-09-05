import React, { useCallback, useEffect, useState } from 'react'
import LoggedLayout from 'shared/src/layouts/LoggedLayout'
import ProductDetail from 'shared/src/components/ProductDetail'
import { Spinner } from '@ui-kitten/components'
// import withAuth from 'shared/src/hocs/withAuth'
import api from 'shared/src/utils/api'
import IProduct from 'shared/src/types/IPoduct'
import { RouteProp } from '@react-navigation/native'

interface IProps {
  route: RouteProp<{ params: { id: string } }, 'params'>
}

const ProductsPage = (props: IProps) => {
  const [product, setProducts] = useState<IProduct>()
  const [loading, setLoading] = useState(true)
  const {
    route: { params },
  } = props
  const { id } = params

  const getProduct = useCallback(async () => {
    try {
      const res = await api.getProductByID(id)

      setProducts(res)
      setLoading(false)
    } catch (error) {
      console.log('Error', error)
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    getProduct()
  }, [getProduct])

  return (
    <LoggedLayout>
      {loading || !product ? (
        <Spinner size="large" />
      ) : (
        <ProductDetail product={product} />
      )}
    </LoggedLayout>
  )
}

// export default withAuth(ProductsPage)
export default ProductsPage
