import * as React from 'react';
import styled from 'styled-components';

const CartInfoContainer = styled.div`
  margin: 2rem 0;
  
  border: 1px solid black;
  p{
    padding: 1rem 2rem;
  }

`




export interface ICartInformationProps {
    cart: any
}

export function CartInformation ({cart}: ICartInformationProps) {
    const [subtotal, setSubtotal] = React.useState()

React.useEffect(() => {
    setSubtotal(cart.reduce((total:number, item:any) => total + item.current_price,
    0).toFixed(2))
    
}, [])

  return (
    <CartInfoContainer>
      <p>Subtotal: ${subtotal}</p>
      <p></p>
    </CartInfoContainer>
  );
}
