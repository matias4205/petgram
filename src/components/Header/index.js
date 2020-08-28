import React from 'react'

import { HeaderWrapper } from './syles'

import { Logo } from '../Logo'

export const Header = () => {
  return (
    <HeaderWrapper>
      <a href='/'>
        <Logo style={{ height: '100%' }} />
      </a>
    </HeaderWrapper>
  )
}
