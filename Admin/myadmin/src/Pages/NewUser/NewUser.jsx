import React from 'react'
import './NewUser.css'
export default function NewUser() {
  return (
    <div className='newUser'>
    <h1 className="newUserTitle">New User</h1>

    <form className="newUserForm">

     <div className="NewUSerItem">
     <label>Name</label>
     <input type='text' placeholder='John'/>
     </div>

     <div className="NewUSerItem">
     <label>Full Name</label>
     <input type='text' placeholder='John Smith'/>
     </div>

     <div className="NewUSerItem">
     <label>Email</label>
     <input type='email' placeholder='John@gmail.com'/>
     </div>

     <div className="NewUSerItem">
     <label>Password</label>
     <input type='password' placeholder='Password'/>
     </div>

     <div className="NewUSerItem">
     <label>Phone</label>
     <input type='text' placeholder='+1 258 3692 012'/>
     </div>

     <div className="NewUSerItem">
     <label>Address</label>
     <input type='text' placeholder='New York | USA'/>
     </div>

     <div className="NewUSerItem">
    <label>Gender</label>
    <div className='userGenderInput'>
    <input type='radio' name='gender' id='male' value='male'/>
    <label for='male'>Male</label>
    <input type='radio' name='gender' id='female' value='female'/>
    <label for='female'>Female</label>
    <input type='radio' name='gender' id='other' value='other'/>
    <label for='other'>Other</label>
    </div>
     </div>

     <div className="NewUSerItem">
     
     
     <label>Active</label>
     <select className="newuserSelect" name='active' id='active'>
     <option value='yes'>Yes</option>
     <option value='no'>No</option>
     </select>
    
     </div>
     
    </form>
    <button className='NewUserBtn'>Create</button>
    </div>
  )
}
