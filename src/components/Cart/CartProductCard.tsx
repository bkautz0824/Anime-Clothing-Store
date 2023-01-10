import React from 'react';
import styled from 'styled-components';

const ProductItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  flex-direction: row;
  padding: 0 2rem;
`;
const ProductImage = styled.img`
  width: 80px;
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

interface Props {
    name: string,
    current_price: number,
    image: string
}


const CartProductCard:React.FunctionComponent<Props> = ({ name, current_price, image }) => {
  const [imageIsLoaded, setImageIsLoaded] = React.useState(false)

    console.log(image)

  return(
    <ProductItem >
      <ProductImage  src={image} onLoad={() => setImageIsLoaded(true)} alt={name} />
      <div>
        <ProductName>{name}</ProductName>
        <ProductPrice>${current_price}</ProductPrice>
      </div>
    </ProductItem>
  )}
  ;

export default CartProductCard