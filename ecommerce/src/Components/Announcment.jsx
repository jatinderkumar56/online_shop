import React from 'react'
import styled from 'styled-components'

const Container =styled.div`
 background-color: teal;
 height: 30px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-weight: 500;
 color: white;
 font-size: 14px;
`
function Announcment() {
  return (
    
   <Container>
   Super Deal! Free Shipping on Orders Over $50
   </Container>
  )
}

export default Announcment