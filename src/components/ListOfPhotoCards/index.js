import React from 'react'

import { ListWrapper } from './styles'
import { PhotoCard, PhotoCardSkeleton } from '../PhotoCard'

export const ListOfPhotoCardsComponent = (props) => {
  const { data: { photos = [], loading } } = props

  return (
    <ListWrapper>
      {loading
        ? [1, 2, 3].map((key) => <PhotoCardSkeleton key={key} />)
        : photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ListWrapper>
  )
}
