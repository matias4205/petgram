import React from 'react'

import UserContext from '../context/UserContext'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisteredUser = () => (
  <UserContext.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }

                  const errorMsg = error && 'El usuario ya existe o hay algun problema.'

                  return <UserForm title='Registrarse' disabled={loading} error={errorMsg} onSubmit={onSubmit} />
                }
              }
            </RegisterMutation>
          </>
        )
      }
    }
  </UserContext.Consumer>
)
