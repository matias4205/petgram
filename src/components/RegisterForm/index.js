import React from 'react'
import { Link } from '@reach/router'

import { useInputValue } from '../../hooks/useInputValue'

import { Button, Input, Form, LoginMessage, ErrorMessage, Container } from './styles'

export const RegisterForm = ({ title, error, disabled, onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input type='email' placeholder='Email' {...email} disabled={disabled} />
        <Input type='password' placeholder='Password' {...password} disabled={disabled} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button disabled={disabled}>{title}</Button>
      </Form>

      <LoginMessage>¿Ya tenes una cuenta? <Link to='/login'>Inicia sesión</Link></LoginMessage>
    </Container>
  )
}
