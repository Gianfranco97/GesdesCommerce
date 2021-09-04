import React from 'react'
import BasicLayout from 'shared/src/layouts/BasicLayout'
import LoginFrom from 'shared/src/components/LoginFrom'
import { useRouter } from 'next/router'

const LoginPage = () => {
  const router = useRouter()

  const onSuccessLogin = () => {
    console.log('onSuccessLogin')
    router.replace('/products')
  }

  return (
    <BasicLayout>
      <LoginFrom onSuccessLogin={onSuccessLogin} />
    </BasicLayout>
  )
}

export default LoginPage
