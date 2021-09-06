import React from 'react'
import BasicLayout from 'shared/src/layouts/BasicLayout'
import RegisterFrom from 'shared/src/components/RegisterFrom'
import { useRouter } from 'next/router'

const RegisterPage = () => {
  const router = useRouter()

  const goToLogin = () => {
    router.push('/')
  }

  return (
    <BasicLayout>
      <RegisterFrom onSuccessRegister={goToLogin} goToLogin={goToLogin} />
    </BasicLayout>
  )
}

export default RegisterPage
