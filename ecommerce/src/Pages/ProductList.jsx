import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Announcment from '../Components/Announcment'
import Products from '../Components/Products'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'
import { mobile } from '../Responsive'
import { useLocation } from 'react-router-dom'



const Container = styled.div``
const Title = styled.h1`
margin: 20px;
`
const FilterContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
 
`
const Filter = styled.div`
display: flex;
align-items: center;
margin: 20px;
${mobile({flexDirection:  'column'})}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

`
const Select = styled.select`

padding: 10px;
margin-right: 20px;

${mobile({margin: '10px 0px',width: '150px'})}
`
const Option = styled.option``
function ProductList() {
  const location = useLocation()
  const cat =location.pathname.split('/')[2];
  const [filters,setfilters] = useState({});
  const [sort,setsort]= useState("newest");

  const handlefilters =(e)=> {
    const value = e.target.value;
    return(
    
    setfilters({
      ...filters,
      [e.target.name]:value
    })
  )

  }
  
  return (
   <Container>
   <Navbar/>
   <Announcment/>
   <Title>{cat}</Title>
   <FilterContainer>
   <Filter>
   <FilterText>Filter Products:</FilterText>
   <Select name="color"  onChange={handlefilters}>
            <Option disabled>
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handlefilters}>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>

   </Filter>

   <Filter>
   <FilterText>Sort Products:</FilterText>
   <Select onChange={(e)=>setsort(e.target.value)}>
            <Option value="newest" >Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
          
   </Filter>
   </FilterContainer>
   <Products cat={cat} filters={filters} sort={sort}/>
   <NewsLetter/>
   <Footer/>
   </Container>
  )
}

export default ProductList