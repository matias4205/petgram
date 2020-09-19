import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import { ListOfFavsComponent } from '../components/ListOfFavs'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy='cache-and-network'>
    {ListOfFavsComponent}
  </Query>
)
