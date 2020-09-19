import React from 'react'

import { Link, FavImage, Skeleton } from './styles'

export const FavItem = ({ id, src }) => (
  <Link to={`/detail/${id}`}>
    <FavImage src={src} />
  </Link>
)

export const FavItemSkeleton = Skeleton
