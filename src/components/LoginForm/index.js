import React from 'react'
import { Link } from '@reach/router'

import { useInputValue } from '../../hooks/useInputValue'

import { Button, Input, Form, RegisterMessage, ErrorMessage, Container, Banner, BannerText, TestAccButton } from './styles'

export const LoginForm = ({ title, error, disabled, onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  const setTestAcc = () => {
    email.setValue('test@gmail.com')
    password.setValue('1234')
  }

  return (
    <Container>
      <Banner>
        <BannerText>
          Tenemos una cuenta de prueba 😉.
        </BannerText>
        <TestAccButton onClick={setTestAcc}>
          Quiero usarla!
        </TestAccButton>
      </Banner>

      <Form onSubmit={handleSubmit}>
        <Input type='email' placeholder='Email' {...email} disabled={disabled} />
        <Input type='password' placeholder='Password' {...password} disabled={disabled} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button disabled={disabled}>{title}</Button>
      </Form>

      <RegisterMessage>¿No tenés una cuenta? <Link to='/register'>Registrate</Link></RegisterMessage>
    </Container>
  )
}
