import React from 'react'
import { isHtmlElement } from 'react-router-dom/dist/dom'
import styled from 'styled-components'

const Container = styled.div`
    width: 50%;
  height: auto;
  margin-left: 1rem;

`

interface IProductInfo {
    item: any
}

const ProductInfo:React.FunctionComponent<IProductInfo> = ({item}) => {
  
    const {name, current_price, category} = item
  
    return (
    <Container>
        <p>{category}</p>
        <p>{name}</p>
        <p>{current_price}</p>
    </Container>
  )
}

export default ProductInfo