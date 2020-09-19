import React from 'react'

import { HeaderContainer, Paragraph } from './styles'
import { HeartIcon } from './HeartIcon'

export const FavsHeader = () => {
  return (
    <HeaderContainer>
      <HeartIcon size={90} />
      <Paragraph>
        These are your liked posts
      </Paragraph>
    </HeaderContainer>
  )
}
