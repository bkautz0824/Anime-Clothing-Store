import React from 'react';
import styled from 'styled-components';
// import products from '../resources/products.json'
import axios from 'axios';
const ProductItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  flex-direction: column;
  padding: 0 2rem;
`;
const ProductImage = styled.img`
  width: 160px;
  height: auto;
  margin-right: 1rem;
`;
const ProductName = styled.h3`
  font-size: 1.25rem;
`;
const ProductPrice = styled.p`
  font-size: 1.125rem;
  color: #333;
`;


const ProductCard = ({ name, price, image }) => {
  const [imageIsLoaded, setImageIsLoaded] = React.useState(false)

  return(
    <ProductItem style={imageIsLoaded ? {} : {display:"none"}}>
      <ProductImage  src={image} onLoad={() => setImageIsLoaded(true)} alt={name} />
      <div>
        <ProductName>{name}</ProductName>
        <ProductPrice>${price}</ProductPrice>
      </div>
    </ProductItem>
  )}
  ;

export default ProductCard