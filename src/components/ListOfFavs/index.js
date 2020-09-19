import React from 'react'

import { FavItem, FavItemSkeleton } from '../FavItem'
import { Grid, EmptyMessage } from './styles'

export const ListOfFavsComponent = ({ loading, error, data = {} }) => {
  if (error) return <p>Error!</p>

  const { favs = [] } = data

  if (loading) {
    return (
      <Grid>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((id) => <FavItemSkeleton key={id} />)
        }
      </Grid>
    )
  }

  return (
    <>
      {favs.length > 0 ? (
        <Grid>
          {
            favs.map(fav => (
              <li key={fav.id}>
                <FavItem {...fav} />
              </li>
            ))
          }
        </Grid>
      ) : (
        <EmptyMessage>
          There are no likes :(
        </EmptyMessage>
      )}
    </>
  )
}
