import React from 'react'

import { PhotoCard } from '../components/PhotoCard'

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
        ({ loading, error, data = { photo: {} } }) => <PhotoCard {...data.photo} />
      }
    </Query>
  )
}
