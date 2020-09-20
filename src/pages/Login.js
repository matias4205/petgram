import React, { useContext } from 'react'
import { navigate } from '@reach/router'

import { Context } from '../context/UserContext'
import { Layout } from '../components/Layout'
import { LoginHeader } from '../components/LoginHeader'
import { LoginForm } from '../components/LoginForm'
import { LoginMutation } from '../container/LoginMutation'

export default () => {
  const { activateAuth } = useContext(Context)

  return (
    <Layout title='Login' description='Login into Petgram'>
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

            return (
              <>
                <LoginHeader />
                <LoginForm title='Iniciar sesion' disabled={loading} error={errorMsg} onSubmit={onSubmit} />
              </>
            )
          }
        }
      </LoginMutation>
    </Layout>
  )
}
