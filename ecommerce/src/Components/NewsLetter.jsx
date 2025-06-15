
import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../Responsive';
const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: 60px;
margin-bottom:20px;
`
const Desc = styled.div`
font-size: 24px;
font-weight: 200;
margin-bottom: 20px;
${mobile({textAlign: 'center'})}
`
const InputContainer = styled.div`
border:1px solid lightgray;
width: 50%;
height: 40px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
${mobile({width: '85%'})}
`
const Input = styled.input`
flex: 8;
padding:10px;
border: none;
`
const Button = styled.button`
flex:1;
border: none;
padding:7px ;
background-color: teal;
color: white;
cursor: pointer;
`
function NewsLetter() {
  return (
    <Container>
    <Title>Newsletter</Title>
    <Desc>Get timely updates from your favourite products</Desc>
    <InputContainer>
    <Input placeholder='Enter email'/>
    <Button>
    <SendIcon/>
    </Button>
    </InputContainer>
    </Container>
  )
}

export default NewsLetter