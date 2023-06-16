import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getProductById from "../../helpers/getProductById";
import { Link } from "react-router-dom";
import sendData from "../../helpers/sendData";

const EditProduct = () => {
  const { idProducto } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getProductById(idProducto)
      .then((product) => {
        setProduct(product);
      })
      .catch((error) => console.error(error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSave = () => {
    sendData(product.id, product.title, product.price, product.description)
      .then((data) => {
        console.log('Producto guardado:', data);
      })
      .catch((error) => {
        console.error('Error al guardar el producto:', error);
      });
  };

  return (
    <div>
      <form>
        <label htmlFor="">MBJ Women's Solid</label>
        <input type="text" name="title" onChange={handleChange} value={product.title} />
        <label htmlFor="">Precio</label>
        <input type="text" name="price" onChange={handleChange} value={product.price} />
        <label htmlFor="">Descripción del producto</label>
        <input type="text" name="description" onChange={handleChange} value={product.description} />
      </form>
      <img src={product.img} alt="" />
      <Link to="/productos">
        <button>Cancelar</button>
      </Link>
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};

export default EditProduct;
