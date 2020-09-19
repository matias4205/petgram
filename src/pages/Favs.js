import React from 'react'

import { FavsWithQuery } from '../container/ListOfFavs'
import { FavsHeader } from '../components/FavsHeader'

export const Favs = () => (
  <>
    <FavsHeader />
    <FavsWithQuery />
  </>
)
