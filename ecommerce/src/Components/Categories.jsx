import React from 'react'
import styled from 'styled-components'
import CategoriesItems from './CategoriesItems'
import { categories } from './DataFile'
import { mobile } from '../Responsive'

const Container = styled.div`
display: flex;
${mobile({padding: '0px',flexDirection: 'column'})}


`
function Categories() {
  return (
    <Container>
    {categories.map((items)=>{
        return(
            <CategoriesItems items={items}/>
        )
    })}
   
    </Container>
  )
}

export default Categories