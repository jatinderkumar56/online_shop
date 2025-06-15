import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/ApiCall';

export default function () {
    const dispatch = useDispatch();
    const [username,setusername]= useState("")
    const [password,setpassword]= useState("")
    const handleChange=(e)=>{
        e.preventDefault();
        login(dispatch,{username,password});
    }
  return (
    <div style={{
    height:'100vh',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column'

    }}>
    <input style={{padding:'10px',marginBottom:'10px'}} type="text" placeholder='username' onChange={(e)=>setusername(e.target.value)} />
    <input style={{padding:'10px',marginBottom:'10px'}}  type="password" placeholder='Password' onChange={(e)=>setpassword(e.target.value)} />
    <button style={{padding:'10px',width:'100px'}} onClick={handleChange}>Login</button>
    </div>
  )
}
