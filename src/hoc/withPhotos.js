import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

export const withPhotos = graphql(gql`
query getPhotos($cateogoryId: ID) {
  photos(categoryId: $cateogoryId) {
    id
    categoryId
    username
    src
    likes
    userId
    liked
  }
}
`)
