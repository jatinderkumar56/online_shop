import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'
import { register } from '../ReduxWork/ApiCall'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";  
import { resetError } from '../ReduxWork/userRedux'
import { resetSuccess } from '../ReduxWork/userRedux'
const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
border: 1px solid grey;
background-color: white;
width: 40%;
${mobile({width:'75%'})}

padding: 20px;


`
const Title = styled.h1`
font-size: 25px;
font-weight: 200;
`
const Form = styled.form`
 display: flex; 
 flex-wrap: wrap;
 align-items: center;
 
 padding: 10px;
 

`
const Input = styled.input`
flex:1;

padding: 10px;
min-width: 40%;


margin: 20px 10px 0px 0px;

`
const Agreement = styled.span`
font-size: 13px;
  margin: 20px 0px;

`
const Button = styled.button`
width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:disabled {
    color: green;
    cursor: "not-allowed";
  }
`
const Error = styled.span`
  color: red;
   width: 100%;
  margin-top: 10px;
`;


function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Declare the navigate function here
  const { isFetching, error, success, errorMessage } = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(""); // To display error messages
useEffect(() => {
   dispatch(resetSuccess());
    dispatch(resetError());
  }, [dispatch]);
 // Redirect on successful registration
  useEffect(() => {
    if(success){
      localStorage.removeItem("cart");
      navigate("/");
    }
  }, [success, navigate]);
  const validateEmail = (email) => {
    // Simple email regex
    return /^\S+@\S+\.\S+$/.test(email);
  };
  
   const handleClick = (e) => {
    e.preventDefault();

    // Clear previous messages
    setMessage("");

    if (!username.trim()) {
      setMessage("Username is required");
      return;
    }
    if (!email.trim() || !validateEmail(email)) {
      setMessage("Please enter a valid email");
      return;
    }
    if (!password || password.length < 6) {
      setMessage("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const user = {
      username,
      email,
      password,
    };
    console.log("Submitting registration:", user);

    register(dispatch, user); // Dispatch register action
  }
 
  return (
    <Container>
    <Wrapper>
    <Title>CREATE AN ACCOUNT</Title>
    <Form onSubmit={handleClick}>
          
          <Input placeholder="username" value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
          <Input placeholder="email"  type="email"
            value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <Input placeholder="password"  type="password"
            value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <Input placeholder="confirm password"   type="password"
            value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          />

    <Agreement> By creating an account, I consent to the processing of my personal
    data in accordance with the <b>PRIVACY POLICY</b>
    </Agreement>
    <Button type='submit' disabled={isFetching}>CREATE</Button>
     {error && <Error>{errorMessage || "Something went wrong"}</Error>}
    {message && <Error>{message}</Error>}
    </Form>
    </Wrapper>
    </Container>
  )
}

export default Register