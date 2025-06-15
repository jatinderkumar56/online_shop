
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'
import { Link } from 'react-router-dom'
 const Container = styled.div`

 flex:1;
 height: 70vh;
 position: relative;
 margin: 10px;
 overflow: hidden;
 &:hover img {
    transform: scale(1.1);
  }
 ` 
 const Image = styled.img`
 height: 100%;
 width: 100%;

 object-fit: cover;
 transition: transform 0.3s ease;
 ${mobile({height: '20vh',objectFit: 'cover'})}
 ` 
 const Info = styled.div`
 height: 100%;
 width: 100%;

 position: absolute;
 top: 0;
 bottom:0;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 ` 
 const Title = styled.h1`
 color:white;
 margin-bottom: 20px;
 ` 
 const Button = styled.button`
 border: none;
 padding:10px;
 background-color: white;
 color: gray;
 cursor: pointer;
font-weight :600 ;
 ` 
function CategoriesItems({items}) {
  return (
   
    <Container>
    <Link to={`/products/${items.cat}`}>
    <Image src={items.img}/>
    <Info>
    <Title>{items.title}</Title>
    <Button>Shop Now</Button>
    </Info>
    </Link>
    </Container>
   
  )
}

export default CategoriesItems