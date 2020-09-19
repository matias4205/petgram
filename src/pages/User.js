import React, { useContext } from 'react'

import { Context } from '../context/UserContext'
import { Button } from '../components/Button'
import { Container } from '../components/Container'

export const User = () => {
  const { removeAuth } = useContext(Context)

  return (
    <Container>
      <Button onClick={removeAuth} style={{ color: 'var(--white)', background: 'var(--tart-orange)' }}>
        Cerrar sesion
      </Button>
    </Container>
  )
}
