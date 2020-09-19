import React from 'react'
import { IconContext } from 'react-icons'
import { MdFavoriteBorder } from 'react-icons/md'

export const HeartIcon = ({ size = 42 }) => (
  <svg
    width={size}
    height={size}
  >
    <defs>
      <linearGradient id='myGradient' gradientTransform='rotate(90)'>
        <stop offset='5%' stopColor='var(--gradient-orange)' />
        <stop offset='95%' stopColor='var(--gradient-violet)' />
      </linearGradient>
    </defs>
    <IconContext.Provider value={{ attr: { fill: "url('#myGradient')" } }}>
      <MdFavoriteBorder size={size} />
    </IconContext.Provider>
  </svg>
)
