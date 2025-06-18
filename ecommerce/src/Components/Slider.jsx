import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { sliderItems } from './DataFile';
import { mobile, tabletstyles } from '../Responsive';
import { Link } from 'react-router-dom';
import { positive } from 'zod/v4';

const Container = styled.div`
display: flex;
height: 100vh;
width: 100%;

position: relative;
overflow: hidden;
${mobile({display: 'none'})}
${tabletstyles({display:'none'})}



`
const Arrow = styled.div`
height: 50px;
width: 50px;
border-radius: 50%;
background-color: #fff7f7;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
margin: auto;
top: 0;
bottom: 0;
left: ${props=> props.direction==="left" && '10px'};
right: ${props=> props.direction==="right" && '10px'};
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;
const Wrapper = styled.div`

height: 100%;
display: flex;
transition: all 1.5s ease;

transform: translateX(${(props)=> props.slideIndex * -100}vw);
`;
const Slide = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-color: #${(props)=>props.bg};
 
`

const ImgContainer = styled.div`
height: 100%;

flex: 1;

`
const Image = styled.img`
height: 80%;



`
const InfoContainer = styled.div`
flex: 1;
padding: 50px;
 



`
const Title = styled.h1`
font-size: 70px;

`
const Paragraph = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;

`
const Button = styled.button`

padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`

function Slider() {
  let [slideIndex, setslideIndex]= useState(0);
const handleSlide=(direction)=>{
  if(direction==="left")
  {
     setslideIndex(slideIndex > 0? slideIndex-1:2)
  }else{
    setslideIndex(slideIndex < 2? slideIndex+1:0)
  }

}
  return (
    <Container>
    <Arrow direction="left" onClick={()=>handleSlide('left')}><ArrowLeftIcon/></Arrow>

    <Wrapper slideIndex={slideIndex} >
    {sliderItems.map((items)=>{
      return(
        <Slide bg={items.bg}>
        <ImgContainer><Image src={items.img} /></ImgContainer>
        <InfoContainer>
        <Title>{items.title}</Title>
        <Paragraph>{items.desc}</Paragraph>
        <Link to="/products/jeans">
                 <Button >Shop Now</Button> 
        </Link>
        
        </InfoContainer>
       </Slide>
      )
    })}
    
    </Wrapper>

    <Arrow direction="right" onClick={()=>handleSlide('right')}><ArrowRightIcon/></Arrow>
    </Container>
  )
}

export default Slider