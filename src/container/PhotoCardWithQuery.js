import React from 'react'

import { PhotoCard, PhotoCardSkeleton } from '../components/PhotoCard'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      username
      likes
      src
      userId
      liked
    }
  }
`

export const PhotoCardWithQuery = ({ id }) => {
  return (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
      {
        ({ loading, error, data = { photo: {} } }) => {
          return (loading || error) ? <PhotoCardSkeleton /> : <PhotoCard {...data.photo} />
        }
      }
    </Query>
  )
}
