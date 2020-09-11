import React from 'react'

import UserContext from '../context/UserContext'
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => (
  <UserContext.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <UserForm onSubmit={activateAuth} />
        )
      }
    }
  </UserContext.Consumer>
)
