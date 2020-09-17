import React, { useContext } from 'react'
import { navigate } from '@reach/router'

import { Context } from '../context/UserContext'
import { RegisterForm } from '../components/RegisterForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const Register = () => {
  const { activateAuth } = useContext(Context)

  return (
    <RegisterMutation>
      {
        (register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables }).then(({ data }) => {
              const { signup } = data
              activateAuth(signup)
              navigate('/')
            })
          }

          const errorMsg = error && 'El usuario ya existe o hay algun problema.'

          return <RegisterForm title='Registrarse' disabled={loading} error={errorMsg} onSubmit={onSubmit} />
        }
      }
    </RegisterMutation>
  )
}
