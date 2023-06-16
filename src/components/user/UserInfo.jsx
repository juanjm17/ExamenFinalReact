import React from 'react'
import Nav from '../nav/Nav'
const UserInfo = () => {
  return (
    <div>
        <Nav />
        <h1>Datos del usuario</h1>
        <form action="">
            <label htmlFor="">Nombre del Usuario</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="text" />
            <label htmlFor="">Telefono</label>
            <input type="text" />
            <label htmlFor="">Ciudad</label>
            <input type="text" />
        </form>
    </div>
  )
}

export default UserInfo