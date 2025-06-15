import React from "react";
import "./UpdateUser.css";
import {Link} from 'react-router-dom'
import {
  PermIdentity,
  CalendarMonth,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
} from "@mui/icons-material";
// import Icon from '@mui/icons-material/CalendarMonth';
export default function UpdateUser() {
  return (
    <div className="mainuser">
      <div className="UserTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newuser">
        <button className="userCreateBtn">Create</button>
        </Link>
      </div>
      <div className="UserContainer">
        <div className="usershow">
          <div className="usershowtop">
            <img
              className="userimage"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div className="usershowtitle">
              <span className="username">Jatinder Kumar</span>
              <span className="userTitle">Software Engineer</span>
            </div>
          </div>
          <div className="usershowbtn">
            <span className="usertitle">Account Details</span>

            <div className="DateShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfiTitle">Kumar99</span>
            </div>
            <div className="DateShowInfo">
              <CalendarMonth className="userShowIcon" />
              <span className="userShowInfiTitle">10.12.1999</span>
            </div>
            <span className="usertitle">Contact Details</span>
            <div className="DateShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfiTitle">+015 78 86654</span>
            </div>
            <div className="DateShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfiTitle">kumar@gmail.com</span>
            </div>
            <div className="DateShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfiTitle">New York| USA</span>
            </div>
          </div>
        </div>

        
        <div className="userUpdate">
          <span className="userEdit">Edit User</span>
          <form className="usereditform">
            <div className="userformLeft">
              <div className="userUpdateItem">
                <label>username</label>
                <input
                  type="text"
                  className="userupdateinput"
                  placeholder="Kumar99"
                />
              </div>
               

              <div className="userUpdateItem">
                <label>fullname</label>
                <input
                  type="text"
                  className="userupdateinput"
                  placeholder="Jatinder Kumar"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  className="userupdateinput"
                  placeholder="kumar@gmail.com"
                />
              </div>
              <div className="userUpdateItem">
              <label>Phone</label>
              <input
                type="text"
                className="userupdateinput"
                placeholder="+015 78 86655"
              />
            </div>
            <div className="userUpdateItem">
            <label>Address</label>
            <input
              type="text"
              className="userupdateinput"
              placeholder="New York| USA"
            />
          </div>
            </div>
            <div className="userformRight">
             <div className="userUpdateUpload">
             <img  className="userimgupload" src="data:image/jpeg;base64,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" alt="" />
            <label htmlFor="file"><Publish className="updateIcon"/></label>
             <input type="file" id="file" style={{display:"none"}}/>
             </div>
             <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
