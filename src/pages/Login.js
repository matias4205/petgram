import React, { useContext } from 'react'
import { navigate } from '@reach/router'

import { Context } from '../context/UserContext'
import { LoginForm } from '../components/LoginForm'
import { LoginMutation } from '../container/LoginMutation'

export const Login = () => {
  const { activateAuth } = useContext(Context)

  return (
    <LoginMutation>
      {
        (login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            login({ variables }).then(({ data }) => {
              const { login } = data
              activateAuth(login)
              navigate('/')
            })
          }

          const errorMsg = error && 'La contraseña es incorrecta o el usuario no existe'

          return <LoginForm title='Iniciar sesion' disabled={loading} error={errorMsg} onSubmit={onSubmit} />
        }
      }
    </LoginMutation>
  )
}
