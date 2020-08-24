import React from 'react'

import { HeaderWrapper } from './syles'

import { Logo } from '../Logo'

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo style={{ height: '100%' }} />
    </HeaderWrapper>
  )
}
