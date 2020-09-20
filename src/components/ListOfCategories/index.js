import React, { useState, useEffect } from 'react'

import { Category, CategorySkeleton } from '../Category'
import { List, Item } from './styles'

const useCategories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.fetch('https://petgram-api-delta.vercel.app/categories')
      .then(res => res.json())
      .then((response) => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategories()

  const renderList = ({ isFixed = false, loading }) => (
    <List>
      {!loading ? (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      ) : (
        [1, 2, 3, 4, 5, 6, 7, 8].map((key) => (
          <Item key={key}>
            <CategorySkeleton key={key} />
          </Item>
        ))
      )}
    </List>
  )

  return (
    renderList({ loading })
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
