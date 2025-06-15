import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Announcment from "../Components/Announcment";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import styled from "styled-components";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from "../Responsive";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../Components/RequestMethod";
import { useDispatch } from "react-redux";
import { addProduct } from "../ReduxWork/cartRedux";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 30px;
  /* ${mobile({padding: '10px'})} */
  ${mobile({flexDirection: 'column', padding:'10px'})}
  /* align-items: center; */
  /* justify-content: space-around; */
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  ${mobile({height: '40vh'})}
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding:'10px'})}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
margin: 25px 0px;
/* background-color: blueviolet; */
display: flex;
justify-content: space-between;

/* align-items: center; */
width: 50%;
${mobile({width: '100%'})}

`;
const Filter = styled.div`
display: flex;
align-items: center;
`;
const FilterTitle = styled.span`

font-size: 20px;
  font-weight: 200;

`;
const FilterColor = styled.div`
height: 15px;
width: 15px;
border-radius: 50%;
background-color: ${(props)=>props.color};
margin-left: 10px;
cursor: pointer;
`;
const FilterSize = styled.select`
 margin-left: 10px;
  padding: 5px;


`;
const FilterSizeOption = styled.option`
/* padding: 20px; */
`;

const Addcontainer = styled.div`
margin: 15px 0px;
width: 50%;
${mobile({width:'100%'})}
display: flex;
justify-content: space-between;

`;
const AmountContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
const Amount = styled.span`
border: 1px solid teal;
width: 30px;
height: 30px;
border-radius: 40%;
display: flex;
align-items: center;
justify-content: center;

`;
const AddButton = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }

`;


function Product() {
  const [productss, setproduct]=useState({});
  const [quantity, setquantity] = useState(1);
  const [color, setcolor] = useState("");
  const [size, setsize] = useState("");
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  // console.log(id)

  //this useeffect is use to fetch product by their ID
  useEffect(()=>{
   
      const getproduct = async ()=>{
       try {
         const res = await publicRequest.get("/products/find/" + id);
         setproduct(res.data)
       } catch (error) {
      
       }
      }
    getproduct()
  },[id])
  console.log("productss.color:", productss.color);

  // handle quatity of product increase and decrease
  const handlequantity=(value)=>{
   if(value==="desc"){
    quantity>1 && setquantity(quantity-1)

   }else if(value=="ins") {
    setquantity(quantity+1)
   }
  }
/// Card Data 
  const handleClick=()=>{
    
    dispatch(addProduct({...productss,quantity,color,size}))
  }
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Wrapper>
        <ImageContainer>
          <Image src={productss.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{productss.title}</Title>
          <Desc>
            {" "}
            {productss.desc}
          </Desc>
          <Price>$ {productss.price}</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {(productss.color || []).map((c) => (
                <FilterColor color={c} key={c} onClick={()=>setcolor(c)} />
              ))}
             
              
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e)=>setsize(e.target.value)}>
              {(productss.size || []).map((s)=>(
                <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
               
                
              </FilterSize>
            </Filter>
          </FilterContainer>


          <Addcontainer>
          <AmountContainer>
          <RemoveIcon onClick={()=>handlequantity("desc")}/>
          <Amount>{quantity}</Amount>
          <AddIcon onClick={()=>handlequantity("ins")}/>
          </AmountContainer>
          <AddButton onClick={handleClick}>Add To Card</AddButton>
          </Addcontainer>

        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default Product;
