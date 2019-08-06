import React, { Component } from 'react';

const Product = ({product}) => {
 
  //if the props product is null, return Product doesn't exist
  if(!product) {
    if (!is_hovered) {
      return(<div className='content'>  Product Doesnt exist</div>);
    } else {
      return(<div className='content'>  {productId} </div>);
    }
  }
     
  //Else, display the product data
  return(  
    <div className='content'> 
      <h2> {product.title} </h2>
      <p> {product.description} </p>
      <h3> Status {product.availability ? 'Available' : 'Out of stock'} </h3>
      <h3> Price : {product.price} </h3>
    </div>
  )
}
 
export default Product ;
