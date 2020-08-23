import React from 'react'

import { ListWrapper } from './styles'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
  return (
    <ListWrapper>
      {[1, 2, 3].map(id => <PhotoCard key={id} />)}
    </ListWrapper>
  )
}
