import React, { useContext } from 'react'

import { Context } from '../context/UserContext'

export const User = () => {
  const { removeAuth } = useContext(Context)

  return (
    <>
      <h1>User</h1>
      <button style={{ width: '100%', height: 32, background: 'red' }} onClick={removeAuth}>Cerrar sesión</button>
    </>
  )
}
