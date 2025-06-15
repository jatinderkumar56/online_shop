import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  

  padding: 10px;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  padding: 10px;
 
`;
const Logo = styled.h1`
  margin: 10px 0px;
 
`;
const Desc = styled.div`
  margin: 10px 0px;
  text-align: left;

`;
const SocialContainer = styled.div`
 
  display: flex;
 
  justify-content: flex-start;
  
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  margin-right: 20px;
  color: white;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  
  flex: 1;
  padding: 10px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin: 10px 0px;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;
const ListItem = styled.li`
  cursor: pointer;
 
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;

  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactLinks = styled.p`
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img``;
function Footer() {
  return (
    <Container>
      <Left>
        <Logo>TrendyNest</Logo>
        <Desc>
          Welcome to your new favorite fashion destination. We bring you a
          curated collection of trendy, high-quality clothing designed for
          everyday confidence and comfort. Whether you're dressing up for a
          special occasion or keeping it casual, our styles help you look and
          feel your best.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <YouTubeIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <Link
          to="/products/jeans"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Link>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactLinks>
          <LocationOnIcon style={{ marginRight: "10px" }} /> Dixieweg 622 98336
          Frankfurt am Main Deutschland
        </ContactLinks>
        <ContactLinks>
          <LocalPhoneIcon style={{ marginRight: "10px" }} /> +49 1521 4095997
        </ContactLinks>
        <ContactLinks>
          <MailIcon style={{ marginRight: "10px" }} /> contact@jatinderkumar.dev
        </ContactLinks>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}

export default Footer;
