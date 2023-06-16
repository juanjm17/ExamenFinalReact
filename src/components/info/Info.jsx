import React from 'react'
import { Link } from "react-router-dom";
const Info = () => {
  return (
    <div>
        <div>
        <img src="" alt="" />
        <h1>EXAMEN DE DWEC</h1>
        </div>
        <p>Disponible en las principales tiendas de aplicaciones digitales</p>
        <Link to={"/productos"}><button>ACCEDER</button></Link>
    </div>
  )
}

export default Info