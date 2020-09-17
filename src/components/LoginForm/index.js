import React from 'react'
import { Link } from '@reach/router'

import { useInputValue } from '../../hooks/useInputValue'

import { Button, Input, Form, RegisterMessage, FormTitle, ErrorMessage, Container } from './styles'

export const LoginForm = ({ title, error, disabled, onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormTitle>{title}</FormTitle>
        <Input type='email' placeholder='Email' {...email} disabled={disabled} />
        <Input type='password' placeholder='Password' {...password} disabled={disabled} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button disabled={disabled}>{title}</Button>
      </Form>

      <RegisterMessage>¿No tenes una cuenta? <Link to='/register'>Registrate</Link></RegisterMessage>
    </Container>
  )
}
