import { css, keyframes } from 'styled-components'

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyframes} ${type};`

export const slideIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${slideInKeyFrames} ${type};`

export const opacityGlow = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${opacityGlowKeyFrames} ${type} infinite;`

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

// Won't push content down, change to height
const slideInKeyFrames = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`

const opacityGlowKeyFrames = keyframes`
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
`
