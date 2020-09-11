import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'

import { Button, Input, Form, RegisterMessage, FormTitle } from './styles'

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <Form onSubmit={onSubmit}>
      <FormTitle>Iniciar sesion</FormTitle>
      <Input type='email' placeholder='Email' {...email} />
      <Input type='password' placeholder='Password' {...password} />
      <Button>Iniciar Sesion</Button>
      <RegisterMessage>¿No tenes una cuenta? <a>Registrate</a></RegisterMessage>
    </Form>
  )
}
