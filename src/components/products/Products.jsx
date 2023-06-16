import {React,useState,useEffect} from 'react'
import getProducts from '../../helpers/getProducts';
import CardProduct from '../cardproduct/CardProduct';
import Nav from '../nav/Nav'
const Products = () => {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        getData();
      }, []);
    
      const getData = () => {
        getProducts()
          .then((products) => {
            setProducts(products);
          })
       
          .catch((error) => console.error(error));
      };

      console.log(products)

  return (
    <div>
        <Nav />
        {products.map(product => <CardProduct key={product.id} data={product} />)}
    </div>
  )
}

export default Products