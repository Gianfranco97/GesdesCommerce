import { useState } from 'react'

interface IuseUserAuth {
  onSuccessLogin?: () => void
  onSuccessRegister?: () => void
}

const useUserAuth = ({ onSuccessLogin, onSuccessRegister }: IuseUserAuth) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    try {
      console.log('login!!!!')
      if (onSuccessLogin) {
        onSuccessLogin()
      }
    } catch (error) {
      console.log('fail login', error)
    }
  }

  const register = () => {
    try {
      console.log('register!!!!')
      if (onSuccessRegister) {
        onSuccessRegister()
      }
    } catch (error) {
      console.log('fail register', error)
    }
  }

  return {
    userName,
    setUserName,
    password,
    setPassword,
    login,
    register,
  }
}

export default useUserAuth
