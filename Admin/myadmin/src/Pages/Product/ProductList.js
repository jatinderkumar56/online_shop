 import React, { useEffect, useState } from 'react'
import './ProductList.css'
// import { productrows } from '../../Components/Datafile'
import { DataGrid, renderActionsCell } from "@mui/x-data-grid";
import Paper from '@mui/material/Paper';
import {DeleteOutline} from '@mui/icons-material';
import { userrows } from "../../Components/Datafile";
import {Link, useLocation} from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
import { deleteProducts, getProducts } from '../../Redux/ApiCall';
export default function Product() {
 
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);
    // const [data,setdata]= useState()
    // const [data, setData]= useState(productrows)
    const handleDelete=(id)=>{
        // setData(data.filter(item=>item.id !=id));
        deleteProducts(id,dispatch);
    
      }
       const columns = [
          { field: "_id", headerName: "ID", width: 200 },
          { field: "product", headerName: "Product", width: 130, renderCell:(params)=>{
            return(
              <div className="imgdiv">
              <img src={params.row.img} alt="" className="imgclass" />
              {params.row.title}
              </div>
            )
          } },
          // { field: "avatar", headerName: "Avatar", width: 130 },
          { field: "inStock", headerName: "Stock", width: 130 },
          // { field: "status", headerName: "Status", width: 130 },
          { field: "price", headerName: "Price", width: 130 },
          { field: "action", headerName: "Action", width: 150, renderCell:(params)=>{
            return(
           <div className="mainActiondiv">
           <Link to={'/product/'+params.row._id}>
             <button className="btneditclass">Edit</button>
             </Link>
             <DeleteOutline onClick={()=>handleDelete(params.row._id)} className="btndeleteclass" />
             </div>
            )
          } }
        ];
        const paginationModel = { page: 0, pageSize: 9 };
  return (
    <div className='productlist'>
     <DataGrid
            rows={products}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={10}
            getRowId={(row) => row._id}
            // pageSize={5}
            checkboxSelection
            disableRowSelectionOnClick
            
            sx={{ border: 0 }}
          />
    </div>
  )
}
