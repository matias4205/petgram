import React from 'react'
import { IconContext } from 'react-icons'
import { MdFavoriteBorder } from 'react-icons/md'

export const HeartIcon = ({ size = 42 }) => {
  return (
    <svg
      width={size}
      height={size}
    >
      <defs>
        <linearGradient id='myGradient' gradientTransform='rotate(90)'>
          <stop offset='5%' stopColor='#ff8c00' />
          <stop offset='95%' stopColor='#b500b5' />
        </linearGradient>
      </defs>
      <IconContext.Provider value={{ attr: { fill: "url('#myGradient')" } }}>
        <MdFavoriteBorder size={size} />
      </IconContext.Provider>
    </svg>
  )
}
