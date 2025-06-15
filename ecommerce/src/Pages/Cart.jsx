import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcment from "../Components/Announcment";
import Footer from "../Components/Footer";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from "../Responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout"
import {userRequest} from '../Components/RequestMethod'

import { Link, useNavigate } from "react-router-dom";



const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding: '0px'})}
`;
const Title = styled.h1`
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  ${mobile({display: 'none'})}
`;

const Bottom = styled.div`
 display: flex;
 justify-content: space-between;
 ${mobile({flexDirection:'column'})} 
`;
const Info = styled.div`
flex: 3;
`
const Product = styled.div`

display: flex;
justify-content: space-between;
${mobile({flexDirection:'column'})}


`
const ProductDetail = styled.div`
flex: 2;
  display: flex;


padding: 10px;
`
const Image = styled.img`
width: 200px;

`
const Details = styled.div`

display: flex;
flex-direction: column;
justify-content: space-around;
padding: 20px;

`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.span`
 width: 20px;
 height: 20px;
 border-radius: 50%;
 background-color: ${(props) => props.color};

`
const ProductSize = styled.span``

const PriceDetail= styled.div`

flex: 1;
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ProductAmountContainer = styled.div`

display: flex;
  align-items: center;
  margin-bottom: 20px;

`
const ProductAmount = styled.span`
font-size: 24px;
  margin: 5px;
  ${mobile({margin: '5px 15px'})}

`
const ProductPrice = styled.span`
font-size: 30px;
  font-weight: 200;
  ${mobile({marginBottom: '20px'})}
`
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
 flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;

`
const SummaryTitle = styled.div`
 font-weight: 200;
`
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};

`

const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;

`
  


function Cart() {

  const cart = useSelector(state=>state.cart);
  const [stripeToken,setstripeToken]= useState(null);
  const KEY=  "pk_test_51QfpKHIzvx8MuKaKncN9b6ib2cu6MqEJl3K11MiWDRvsHOpeu6GD3UfIE8bCn76SiYZb3xC9ZeogIXU7axyLSwAp001kU8jj6y"
  
  const navigate = useNavigate();
  

  const onToken = (token)=>{
    setstripeToken(token)
  }
 

  useEffect(()=>{
    const makerequest = async()=>{
      try {
        const res = await userRequest.post("/checkout/payment",{
          tokenId:stripeToken.id,
         
          amount:300

        });
        navigate("/success",{ state: { stripeData: res.data, cart: cart, } })
      
      } catch{}
    };
   stripeToken && makerequest();
  },[stripeToken,cart.total,navigate]);
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
        <Link to={'/'}>
          <TopButton>CONTINUE SHOPPING</TopButton>
          </Link >
          <StripeCheckout
            name="lama shop"
            image="https://avatars.githubusercontent.com/u/1486366?v=4"
            billingAddress
            shippingAddress
            description={`your total is $${cart.total}`}
            amount={cart.total*100}
            token={onToken}
            stripeKey={KEY}
            >
             <TopButton type="filled">CHECHOUT NOW</TopButton>
            </StripeCheckout>
         
        </Top>
        <Bottom>
          <Info>
          {cart.products.map(product=>(
            <Product>
            <ProductDetail>
              <Image src={product.img} />
              <Details>
                <ProductName>
                  <b>Product:</b> {product.title}
                </ProductName>
                <ProductId>
                  <b>ID:</b> {product._id}
                </ProductId>
                <ProductColor color={product.color} />
                <ProductSize>
                  <b>Size:</b> {product.size}
                </ProductSize>
              </Details>
            </ProductDetail>
  
  
            <PriceDetail>
            <ProductAmountContainer>
              <AddIcon />
              <ProductAmount>{product.quantity}</ProductAmount>
              <RemoveIcon />
            </ProductAmountContainer>
            <ProductPrice>$ {product.quantity * product.price}</ProductPrice>
          </PriceDetail>
          </Product>
          ))}
          
          
        
        <Hr />


          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            
            <StripeCheckout
            name="lama shop"
            image="https://avatars.githubusercontent.com/u/1486366?v=4"
            billingAddress
            shippingAddress
            description={`your total is $${cart.total}`}
            amount={cart.total*100}
            token={onToken}
            stripeKey={KEY}
            >
            <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
           
          </Summary>

        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
