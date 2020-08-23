import React, { useState, useEffect } from 'react'

import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    window.fetch('https://petgram-api-delta.vercel.app/categories')
      .then(res => res.json())
      .then((response) => {
        setCategories(response)
      })
  }, [])

  const renderList = (isFixed = false) => (
    <List className={isFixed ? 'fixed' : ''}>
      {
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))
      }
    </List>
  )

  return (
    renderList()
  )
}
