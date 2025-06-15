import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { useDispatch } from "react-redux";
import { login } from "../ReduxWork/ApiCall";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetError } from "../ReduxWork/userRedux";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  background-color: white;
  width: 25%;

  padding: 20px;

  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  margin: 10px 0px;
  padding: 10px;
  min-width: 40%;

  border: 1px solid gray;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: "not-allowed";
  }
`;

const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
`;

function Login() {
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    console.log("Username", username + password);
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setusername(e.target.value)}
          />
          <Input
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Invalid username and passsword</Error>}
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={"/register"}
          >
            {" "}
            <Links>DO NOT YOU REMEMBER THE PASSWORD?</Links>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={"/register"}
          >
            <Links>CREATE A NEW ACCOUNT</Links>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
