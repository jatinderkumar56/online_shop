import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from './DataFile'
import ProductItems from './ProductItems'
import axios from 'axios'

const Container = styled.div`
display: flex;
flex-wrap: wrap;


`
function Products({cat,filters,sort}) {

  const [products,setproducts]= useState([])
  const [filteredproducts,setfilteredproducts]= useState([])
  
  useState(()=>{
   
    const getProduct = async()=>{
      try {
        const res = await axios.get(
          //if category available like when we click on category so show
          //only category related product otherwise show all like in homepage under category section.
          cat
          ?
          `https://ecommerce-web-1-fdu6.onrender.com/api/products?category=${cat}`
          :
          "https://ecommerce-web-1-fdu6.onrender.com/api/products");
          // put all api fetch product in this usestate setproducts
          // now all our products are in product usestate
        setproducts(res.data);
      } catch (error) {
        
      };
    }
    getProduct()
  },[cat])// when category change just run this function

  // this useeffect filter size and color which is in filters method
  useEffect(()=>{
    cat && 
    setfilteredproducts(
      products.filter((item)=>
        Object.entries(filters).every(([key,value])=>
          item[key].includes(value)))
    );
  },[products,cat,filters])

  // this useeffect filter asc,dec,and newest elements in a product
  useEffect(()=>{
    if(sort==="newest"){
      setfilteredproducts((prev)=>
      [...prev].sort((a,b)=>a.createdAt - b.createdAt)
      );
    }else if(sort==="asc"){
      setfilteredproducts((prev)=>
      [...prev].sort((a,b)=>a.price - b.price)
      );
    }else{
      setfilteredproducts((prev)=>
        [...prev].sort((a,b)=>b.price - a.price)
        );
    }
  },[sort])
  return (
    <Container>
    { cat ? filteredproducts.map((items,key)=>{
        return(
            <ProductItems items={items} key={items.id}/>
        )
    }): products.slice(0,8).map((items,key)=>{
      return(
          <ProductItems items={items} key={items.id}/>
      )
  }) }
    
    </Container>
  )
}

export default Products