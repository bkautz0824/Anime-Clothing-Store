import * as React from 'react';

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
    <div>
      <p>Subtotal: ${subtotal}</p>
      <p></p>
    </div>
  );
}
