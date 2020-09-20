import React from 'react'

import { FavsWithQuery } from '../container/ListOfFavs'
import { FavsHeader } from '../components/FavsHeader'
import { Layout } from '../components/Layout'

export default () => (
  <Layout title='Favorites' description='Liked photos on Petgram'>
    <FavsHeader />
    <FavsWithQuery />
  </Layout>
)
