import React, { useState } from "react";
import "./UserList.css";
import { DataGrid, renderActionsCell } from "@mui/x-data-grid";
import Paper from '@mui/material/Paper';
import {DeleteOutline} from '@mui/icons-material';
import { userrows } from "../../Components/Datafile";
import {Link} from 'react-router-dom'
// <Link to="/register">
// <MenuItem>REGISTER</MenuItem>
// </Link>

export default function UserList() {
  const [data, setData]= useState(userrows)
  const handleDelete=(id)=>{
    setData(data.filter(item=>item.id !=id));

  }
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "user", headerName: "User name", width: 130, renderCell:(params)=>{
      return(
        <div className="imgdiv">
        <img src={params.row.avatar} alt="" className="imgclass" />
        {params.row.userName}
        </div>
      )
    } },
    // { field: "avatar", headerName: "Avatar", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    { field: "status", headerName: "Status", width: 130 },
    { field: "transaction", headerName: "Transaction", width: 130 },
    { field: "action", headerName: "Action", width: 150, renderCell:(params)=>{
      return(
     <div className="mainActiondiv">
     <Link to={'/user/'+params.row.id}>
       <button className="btneditclass">Edit</button>
       </Link>
       <DeleteOutline onClick={()=>handleDelete(params.row.id)} className="btndeleteclass" />
       </div>
      )
    } }
  ];

  
  const paginationModel = { page: 0, pageSize: 9 };
  return (
    
    <div className="UserList">
    
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={10}
        // pageSize={5}
        checkboxSelection
        disableRowSelectionOnClick
        
        sx={{ border: 0 }}
      />
      
    </div>
  );
}
