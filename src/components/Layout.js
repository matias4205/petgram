import React from 'react'
import { Helmet } from 'react-helmet'

export const Layout = ({ children, title = '', description = '' }) => (
  <>
    <Helmet>
      <title>Petgram {title.length > 0 ? `| ${title}` : ''}</title>
      <meta name='description' content={description.length > 0 ? `| ${title}` : 'Petgram your pet app'} />
    </Helmet>
    {children}
  </>
)
