import React, { useState,useEffect } from 'react'
import './WidgetLarge.css'
import { userRequest } from '../../Redux/RequestMethod'
import {format} from 'timeago.js'
export default function WidgetLarge() {
    const Button=({type})=>{
        return <button className={'widgetbtn '+ type}>{type}</button>
    }

    const [Orders,setOrder]= useState([])
    
      useEffect(()=>{
      const getorder = async ()=>{
       try {
          const res = await userRequest.get("orders");
          // console.log( "All Order data",res.data)
          setOrder(res.data)
       } catch{
        
       }
      }
      getorder()
      },[])
  return (
    <div className="widgetlarge">
    <div className="widgetTitle">Lastest Transactions</div>
    <table className="widgetTable">

    <tr className="tableHeadingrow">
    <th className="tableheading">Customer</th>
    <th className="tableheading">Date</th>
    <th className="tableheading">Amount</th>
    <th className="tableheading">Status</th>
    </tr>
    {Orders.map(order=>(
    <tr className="tabledatarow" key={order._id}>
    <td className="customerData">
    
    <span className="usernameinfo">{order.userID}</span>
    </td>
    <td className="dateData">{format(order.createdAt)}</td>
    <td className="AmountData">$ {order.amount}</td>
    <td className="SaleData"><Button type={order.status }/></td>
    </tr>
    ))}
    
    
    
    </table>
    </div>
  )
}
