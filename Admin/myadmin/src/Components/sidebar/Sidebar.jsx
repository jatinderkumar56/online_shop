import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';
import {Analytics, CurrencyExchange, Feedback, Inventory2, LineStyle,Mail,ManageAccounts,Message,Person,Summarize,Timeline,TrendingUp, Assessment} from '@mui/icons-material';
export default function Sidebar() {
  return (
    
      <div className="sidebar">
      <div className="sidebarWrapper">

      <div className="sidebarMenu">

      <h3 className="sidebarTitle">DashBoard</h3>
      <ul className="sidebarList">
      <Link to='/'>
      <li className="sideBarListItem">
      <LineStyle className='sideBarIcon'/>Home
      </li>
      </Link>
      <li className="sideBarListItem">
      <Timeline className='sideBarIcon'/>Analytics
      </li>
      <li className="sideBarListItem">
      <TrendingUp className='sideBarIcon'/>Sales
      </li>
      </ul>

      </div>

      <div className="sidebarMenu">

      <h3 className="sidebarTitle">Quick Menu</h3>
      <ul className="sidebarList">
      <Link to="/userlist" >
      <li className="sideBarListItem">
      <Person className='sideBarIcon'/>User
      </li></Link>
      <Link to="/product" >
      <li className="sideBarListItem">
      <Inventory2 className='sideBarIcon'/>Products
      </li>
      </Link>
      <li className="sideBarListItem">
      <CurrencyExchange className='sideBarIcon'/>Transactions
      </li>
      <li className="sideBarListItem">
      <Summarize className='sideBarIcon'/>Reports
      </li>
      </ul>

      </div>

      <div className="sidebarMenu">

      <h3 className="sidebarTitle">Notifications</h3>
      <ul className="sidebarList">
      <li className="sideBarListItem">
      <Mail className='sideBarIcon'/>Mail
      </li>
      <li className="sideBarListItem">
      <Feedback className='sideBarIcon'/>Feedback
      </li>
      <li className="sideBarListItem">
      <Message className='sideBarIcon'/>Messages
      </li>
      </ul>

      </div>
      <div className="sidebarMenu">

      <h3 className="sidebarTitle">Staff</h3>
      <ul className="sidebarList">
      <li className="sideBarListItem">
      <ManageAccounts className='sideBarIcon'/>Manage
      </li>
      <li className="sideBarListItem">
      <Analytics className='sideBarIcon'/>Analytics
      </li>
      <li className="sideBarListItem">
      <Assessment className='sideBarIcon'/>Reports
      </li>
      </ul>

      </div>
     
      </div>
      </div>
   
  )
}
