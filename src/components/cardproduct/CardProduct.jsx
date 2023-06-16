import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import deleteProduct from "../../helpers/deleteProduct"
const CardProduct = ({data}) => {
console.log(data)
const [dataRecovery, setData] = useState(data)
    
  return (
    <div>
        <h3>{data.title}</h3>
        <p>Precio:{data.price}</p>
        <img src={data.image} alt="" />
        <p>{data.description}</p>
        <Link to={`/products/${data.id}`}> <button>EDITAR</button></Link>
        <button onClick={() => deleteProduct(data.id)  }>BORRAR</button>
        
    </div>
  )
}

export default CardProduct