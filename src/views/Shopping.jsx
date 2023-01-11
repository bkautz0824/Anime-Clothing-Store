import React from 'react'
import styled from 'styled-components';
import { Container } from './Home';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import translatedNames from '../resources/translated-names.json'


export const ShoppingContainer = styled.div`
  width: 100%;
  height: 3000px;
  text-align: center;
  display: flex;
  /* align-items: center; */
  flex-direction: column;

  /* z-index: 1; */
`;

export const ShoppingItemsContainer = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export default function Shopping() {
    const [productList, setProductList] = React.useState([])
    console.log(productList)
    React.useEffect(() => {
      axios.get("http://localhost:5000/products/get-all-products" )
      .then((res)=>{ 
      let array = res.data
  
      setProductList(array)
        // return productList
      }
      )
      .catch((err)=> console.log(err))
  
  
    }, [])


    

  return (
    <Container>
       <h1>Shopping</h1> 
       <ShoppingItemsContainer>
        {productList.map((item) => (
          <Link 
            to={`/${item.id}`}
          >
            <ProductCard
              id={item.id}
              name={item.category}
              price={item.current_price}
              image={item.image}
              />
          </Link>
            
        ))}
       </ShoppingItemsContainer>
       
      
    </Container>
  )
}
