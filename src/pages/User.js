import React, { useContext } from 'react'

import { Context } from '../context/UserContext'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Layout } from '../components/Layout'

export const User = () => {
  const { removeAuth } = useContext(Context)

  return (
    <Layout title='User'>
      <Container>
        <Button onClick={removeAuth} style={{ color: 'var(--white)', background: 'var(--tart-orange)' }}>
          Log out
        </Button>
      </Container>
    </Layout>
  )
}
