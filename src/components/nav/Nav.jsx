import React from 'react'
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>Examen Juan Jiménez Molina</li>
               <Link to={"/"}> <li>Inicio</li> </Link>
               <Link to={"/productos"}> <li>Productos</li> </Link>
             <Link to={"/user"}>   <li>Usuario:Juan</li> </Link>
                <li>Cerrar sesión</li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav