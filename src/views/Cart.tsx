import React from 'react'
import { addToCart, removeFromCart } from '../api-helper/cart-requests'
import { getOneUser } from '../api-helper/user-requests'
import CartProductCard from '../components/Cart/CartProductCard'
import _ from "lodash"
import { CartInformation } from '../components/Cart/CartInformation'
import styled from 'styled-components'

const CartPage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 80%;
`
const CartItemsDisplay = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin-top: 1rem;
`

interface CartItemsProps {
    productInfo: any,
    quantity: number,
}



interface Props {

}


const Cart:React.FunctionComponent<Props> = () => {
    const [user, setUser] = React.useState<any>()
    const [cart, setCart] = React.useState<Array<CartItemsProps>>()

    React.useEffect(() => {
        getOneUser("639c925e2db1be4119cd8b16").then((res) => 
            {   
                let newCart:Array<any> = []
                res.data.cart.forEach((item:any) => 
                {
                    const doesExist = newCart.findIndex(({productInfo}) => item._id === productInfo._id)
                    console.log(doesExist)
                    if(doesExist === -1) {
                        newCart.push({
                        productInfo: item,
                        quantity: 1
                    })
                    return 
                }
                    newCart[doesExist].quantity = newCart[doesExist].quantity + 1
                }
                )
                setCart(newCart)
                setUser(res.data)
            }
        )
    }, [])

  return (


    <CartPage>
        <CartItemsDisplay>
        <h2>Your Items</h2>
        {user && user.cart.map((item:any) => 

            
            <CartProductCard 
            {..._.pick(item, ["name", "current_price", "image"])}
            // name={item.name}
            // current_price={item.current_price}
            // image={item.image}
            />
        )}
        </CartItemsDisplay>
        <div>
            {user && 
            <CartInformation
            cart={user.cart}
             />
             }
       
        </div>
    </CartPage>
  )
}

export default Cart