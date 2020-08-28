import React from 'react'

import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Header } from './components/Header'
import { Content } from './components/Content'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { ErrorMessage } from './components/ErrorMessage'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detailId')

  return (
    <>
      <GlobalStyle />
      <Header />
      <ErrorMessage message='El post no existe' />
      <Content>
        {
          detailId ? (
            <PhotoCardWithQuery id={detailId} />
          ) : (
            <>
              <ListOfCategories />
              <ListOfPhotoCards />
            </>
          )
        }
      </Content>
    </>
  )
}

export default App
