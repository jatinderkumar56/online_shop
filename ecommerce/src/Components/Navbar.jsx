import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../Responsive";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../ReduxWork/userRedux";
function Navbar() {
  const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
  `;
  const Wrapper = styled.div`
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
  `;
  const Left = styled.div`
   
    flex: 1;
    display: flex;
    align-items: center;
   
  `;
  const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
  `;
  const SearchContainer = styled.div`
    margin-left: 25px;
    padding: 5px;
    border: 1px solid grey;
    align-items: center;
    justify-content: center;
    height: 25px;
    display: flex;
  `;
  const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
  `;
  const Center = styled.div`
    flex: 1;
  `;
  const Logo = styled.h1`
    text-align: center;
    ${mobile({ fontSize: "24px" })}
  `;
  const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${mobile({ justifyContent: "center", flex: 2 })}
  `;
  const MenuItem = styled.div`
   

    margin-left: 25px;
    font-size: 14px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  `;
 // Get cart quantity from Redux
  const quantity = useSelector((state) => state.cart.quantity); 
  // Get current user from Redux
  const currentUser = useSelector((state) => state.user.currentUser); 
  const dispatch = useDispatch();
  // For navigation after logout
  const navigate = useNavigate(); 
  // Logout Handler
  const handleLogout = () => {
    localStorage.removeItem("persist:root"); // Clears user info
    localStorage.removeItem("cart"); // Clears cart info
    dispatch(logout()); // Dispatch logout action
    navigate("/"); // Navigate to homepage after logout
  };
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/products/jeans">
            <SearchIcon fontSize="small" />
            </Link>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>TrendyNest</Logo>
        </Center>

        <Right>
          {/* Conditionally render Register/Logout based on user login state */}
          {currentUser ? (
           <Link style={{ textDecoration: "none", color: "inherit" }}  ><MenuItem onClick={handleLogout}>Logout</MenuItem></Link>
          ) : (
            <>
              <Link style={{ textDecoration: "none", color: "inherit" }} to="/register">
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link style={{ textDecoration: "none", color: "inherit" }} to="/login">
                <MenuItem>LOGIN</MenuItem>
              </Link>
            </>
          )}
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
