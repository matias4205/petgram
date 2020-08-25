import React from 'react'

import { ListWrapper } from './styles'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } }) => {
  return (
    <ListWrapper>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ListWrapper>
  )
}
