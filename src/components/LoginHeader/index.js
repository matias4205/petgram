import React from 'react'
import { MdPets } from 'react-icons/md'

import { HeaderContainer, Paragraph } from './styles'

export const LoginHeader = () => {
  return (
    <HeaderContainer>
      <MdPets size={90} fill='var(--dark-gray)' />
      <Paragraph>
        Inicia sesion con tu cuenta de Petgram
      </Paragraph>
    </HeaderContainer>
  )
}
