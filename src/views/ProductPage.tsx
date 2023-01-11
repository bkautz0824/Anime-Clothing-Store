import React from 'react'
import { getOneProduct } from '../api-helper/product-requests'
import styled from 'styled-components';

const ProductImage = styled.img`
  width: 50%;
  height: auto;
  margin-right: 1rem;
`;

const InfoContainer = styled.div`
    width: 50%;
  height: auto;
  margin-left: 1rem;

`

const ContentContainer = styled.div`
    width: 90%;
    margin: 2rem 2rem;
    display: flex;
    flex-direction: row;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;

`
type ProductProps = {
    id: number
}

const ProductPage:React.FunctionComponent<ProductProps> = () => {
    const [item, setItem] = React.useState<any>()

    React.useEffect(() => {
        getOneProduct('639ced329d9dccf825e80a62')
        .then((res) => {
            console.log(res.data)
            setItem(res.data)
        })
        .catch((err) => console.log(err))
    }, [])

  return (
    <Container>
        <h1>Product Page</h1>
        {item && 
        <ContentContainer>
            <ProductImage src={item.image}/>
            <InfoContainer>
                <h3>{item.name}</h3>
                
            </InfoContainer>
        </ContentContainer>
        }
        


    </Container>
  )
}

export default ProductPage