import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

import { Button } from './styles'

export const FavButton = ({ liked, likes, onClick }) => {
  const LikeIcon = liked ? <MdFavorite size='25px' /> : <MdFavoriteBorder size='25px' />

  return (
    <Button Button onClick={onClick}>
      {LikeIcon}
      {likes}
    </Button>
  )
}
