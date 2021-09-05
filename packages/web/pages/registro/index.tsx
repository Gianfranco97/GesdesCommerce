import React from 'react'
import BasicLayout from 'shared/src/layouts/BasicLayout'
import RegisterFrom from 'shared/src/components/RegisterFrom'
import { useRouter } from 'next/router'

const RegisterPage = () => {
  const router = useRouter()

  const onSuccessRegister = () => {
    router.replace('/')
  }

  return (
    <BasicLayout>
      <RegisterFrom onSuccessRegister={onSuccessRegister} />
    </BasicLayout>
  )
}

export default RegisterPage
