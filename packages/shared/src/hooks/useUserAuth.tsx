import { useState } from 'react'
import api from '../utils/api'

interface IuseUserAuth {
  onSuccessLogin?: (token: string) => void
  onSuccessRegister?: () => void
}

const useUserAuth = ({ onSuccessLogin, onSuccessRegister }: IuseUserAuth) => {
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    try {
      const res = await api.login(userName, password)

      if (onSuccessLogin) {
        onSuccessLogin(res.token)
      }
    } catch (error) {
      console.log('fail login', error)
    }
  }

  const register = async () => {
    try {
      // const res = await api.register(email, userName, password)

      if (onSuccessRegister) {
        onSuccessRegister()
      }
    } catch (error) {
      console.log('fail register', error)
    }
  }

  return {
    email,
    setEmail,
    userName,
    setUserName,
    password,
    setPassword,
    login,
    register,
  }
}

export default useUserAuth
