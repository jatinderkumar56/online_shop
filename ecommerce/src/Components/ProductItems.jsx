import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
const Info = styled.div`
opacity: 0;
height: 100%;
width: 100%;
z-index: 3;
position: absolute;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.2);
transition: all 0.5s ease;
`
const Container = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: center;
height: 350px;
min-width: 280px;

margin: 5px;
background-color: #f5fbfd;
position: relative;
transition: all 0.5s ease;
&:hover ${Info}{
    opacity: 1;
}

`



const Circle = styled.div`
width: 200px;
height: 200px;
background-color: white;
border-radius: 50%;
position: absolute;
`
const Image = styled.img`
height: 75%;
z-index: 2;
`

const Icon = styled.div`
width:40px;
height: 40px;
background-color: white;
border-radius: 50%;
margin:10px;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
&:hover{
    
    transform: scaleX(1.1);
    background-color:#e9f5f5;
}


`

function ProductItems({items}) {
  return (
    <Container>
    <Circle/>
    <Image src={items.img}/>
    <Info>
    <Icon><ShoppingCartOutlinedIcon/></Icon>
    <Link to={`/product/${items._id}`}>
    <Icon><SearchOutlinedIcon/></Icon>
    </Link>
    <Icon><FavoriteBorderOutlinedIcon/></Icon>
    </Info>
    </Container>
  )
}

export default ProductItems