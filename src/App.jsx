import React from "react";
import Home from "./views/Home";
import { Container } from "./views/Home";
import MainRoutes from "./routes/main-routes";
import { NavContainer } from "./views/Home";
import { Link } from "react-router-dom";

const NavBar = () => {


  return (
    <NavContainer>
      <img src={require('../src/assets/logo.jpg')} alt="logo"/>
      <Link to='/'><p>Home</p> </Link>  
      <Link to='/shopping'><p>Shop</p> </Link>  
      <Link to='/'><p>Collections</p> </Link>  
      <Link to='/'><p>Contact</p> </Link>  
      <Link to='/'><p>About</p> </Link>  
       
    </NavContainer>
  )
}

function App() {
  return (

    <Container>
      <NavBar/>
      <MainRoutes/>
    </Container>
  );
}

export default App;
