import { useState } from 'react'
import api from '../utils/api'

interface IuseUserAuth {
  onSuccessLogin?: (token) => void
  onSuccessRegister?: () => void
}

const useUserAuth = ({ onSuccessLogin, onSuccessRegister }: IuseUserAuth) => {
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
