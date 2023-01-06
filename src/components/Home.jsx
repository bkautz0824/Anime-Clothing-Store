import React from 'react';
import styled from 'styled-components';
// import products from '../resources/products.json'
import axios from 'axios';
import ProductCard from './ProductCard'

const HomeContainer = styled.div`
  width: 100%;
  height: 1500px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  /* z-index: 1; */
`;
const ProductList = styled.ul`
  list-style-type: none;
  height:25%;
  display: flex;
  flex-direction: row;
  width: 80%;
  overflow: hidden;
  overflow-x: scroll;
`;

const NavContainer = styled.nav`
  display:flex;
  align-items: center;
  /* flex: 1 1 auto; */
  background-color: white;
  width:100%;
  height:7%;
  margin:0 auto;
  justify-content: space-evenly;
  border-bottom: 0.5px solid grey;
  position: sticky;
  z-index: 100;
  top:0;
  img{
    height: 5rem;
    width: 5rem;
  };
  a{
    text-decoration: none;
    color: black;
  }

`
const LandingPage = styled.div`

  margin-top: 2rem;
  width: 100%;
  height: 500px;
  position: relative;
  img{
    width:80%;
    height: 80%;
    opacity: 40%;
    border: 1px solid black;
  }
  h1{
    font-size: 5rem;
    position: absolute;
    top: 10%;
    bottom: 50%;
    right:40%;
    left:35%;
    /* transform: translate(-50%, -50%); */
  }
  /* background-color: white; */
  
`
const Landing = () => {

  return (
    <LandingPage>
          <img src={require('../assets/luffy.jpg')} alt="helloooo"/>
          <h1>Anime Gear</h1>
    </LandingPage>
  )
}

const NavBar = () => {


  return (
    <NavContainer>
      <img src={require('../assets/logo.jpg')}/>
      <a href='#'><p>Home</p> </a>  
      <a href='#'><p>Shop</p> </a>  
      <a href='#'><p>Collections</p> </a>  
      <a href='#'><p>Contact</p> </a>  
      <a href='#'><p>About</p> </a>  
       
    </NavContainer>
  )
}


const List = () => {
  const [productList, setProductList] = React.useState([])
  console.log(productList)
  React.useEffect(() => {
    axios.get("http://localhost:5000/products/get-all-products" )
    .then((res)=>{ 
    setProductList(res.data)
      console.log(res)
    
    }
    )
    .catch((err)=> console.log(err))


  }, [])

  return(
    <ProductList>
        {productList.map((item) => (
            <ProductCard
            name={item.category}
            price={item.current_price}
            image={item.image}
            // image={require(`../${item.image}`)}
          />
        ))}
      
    </ProductList>
  )
}


const Home = () => {
  return (
    <HomeContainer>
    <NavBar/>
    <Landing/>
    <List/>
    </HomeContainer>
  );
};

export default Home;
