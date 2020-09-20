import React, { useContext } from 'react'
import { navigate } from '@reach/router'

import { Context } from '../context/UserContext'
import { RegisterForm } from '../components/RegisterForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { RegisterHeader } from '../components/RegisterHeader'
import { Layout } from '../components/Layout'

export default () => {
  const { activateAuth } = useContext(Context)

  return (
    <Layout title='Register' description='Register an account in Petgram'>
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

            return (
              <>
                <RegisterHeader />
                <RegisterForm title='Registrarse' disabled={loading} error={errorMsg} onSubmit={onSubmit} />
              </>
            )
          }
        }
      </RegisterMutation>
    </Layout>
  )
}
