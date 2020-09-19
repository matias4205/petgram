import React from 'react'
import { MdPets } from 'react-icons/md'

import { HeaderContainer, Paragraph } from './styles'

export const RegisterHeader = () => {
  return (
    <HeaderContainer>
      <MdPets size={90} fill='var(--dark-gray)' />
      <Paragraph>
        Registrate en Petgram
      </Paragraph>
    </HeaderContainer>
  )
}
