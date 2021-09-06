import React from 'react'
import BasicLayout from 'shared/src/layouts/BasicLayout'
import LoginFrom from 'shared/src/components/LoginFrom'
import { useRouter } from 'next/router'

const LoginPage = () => {
  const router = useRouter()

  const onSuccessLogin = (token: string) => {
    localStorage.setItem('accessToken', token)
    router.replace('/products')
  }

  const goToRegister = () => {
    router.push('/registro')
  }

  return (
    <BasicLayout>
      <LoginFrom onSuccessLogin={onSuccessLogin} goToRegister={goToRegister} />
    </BasicLayout>
  )
}

export default LoginPage
