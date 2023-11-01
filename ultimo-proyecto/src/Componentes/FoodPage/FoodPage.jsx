import { Description } from '@mui/icons-material';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Card } from 'react-bootstrap';
import Cards from './cards';

const FoodPage = () => {

  const [products, setProducts] = useState ([]) ;

  const fetchProducts = async() => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json(); 
    setProducts (data); 
  }
  console.log(products);

  useEffect (() => {
    fetchProducts();

  }, [])


  return (
    <>
    <div className="container">

        <h1>Platos Calientes</h1>      
        <hr />
        {products.map(product => (
          <Cards 
            imagen={product.image}
            titulo={product.title}
            description={product.description}
            price={product.price}
          ></Cards>
        ))}
    </div>
    </>
  )
}

export default FoodPage
