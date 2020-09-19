import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

import { opacityGlow } from '../../styles/animation'

export const Link = styled(LinkRouter)`
  display: block;
  position: relative;
  width: 100%;
  max-width: 300px;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;

  &::after {
    display: none;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: var(--black);
    opacity: .2;
    z-index: 1;
  }

  &:hover {
    &::after {
      display: block;
    }
  }
`

export const FavImage = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;  
`

export const Skeleton = styled.div`
  ${opacityGlow()}
  display: block;
  width: 100%;
  max-width: 300px;
  padding-bottom: 100%;
  background-color: var(--dark-gray);
`
