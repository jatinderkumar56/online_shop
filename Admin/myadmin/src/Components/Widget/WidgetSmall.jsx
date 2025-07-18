import React, { useEffect, useState } from "react";
import "./WidgetSmal.css";
import { Visibility } from "@mui/icons-material";
import { userRequest } from "../../Redux/RequestMethod";
export default function WidgetSmall() {
  const [users,setusers]= useState([])

  useEffect(()=>{
  const getusers = async ()=>{
   try {
      const res = await userRequest.get("users/?new=true");
      console.log( "All user data",res.data)
      setusers(res.data)
   } catch{
    
   }
  }
  getusers()
  },[])
  return (
    <div className="widgetsmall">
      <span className="widgetTitle">New Join Members</span>
      <ul className="widgetList">
      {users.map(user=>(
        <li className="widgetlistItem" key={users._id}>
          <img
            src={user.img || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAwgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA6EAABAwIDBgMFBgUFAAAAAAABAAIDBBEFEiEGEzFBUWEicYEHI1KRwRQyobHR8CQzNEJyFUNTYuH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAhEQEBAAICAgIDAQAAAAAAAAAAAQIRAyExQQQSIjJCFP/aAAwDAQACEQMRAD8A68BOyaF8l9EkJoVQrIUkWQRsghSQggUrKZCigiVA8VodrtqKfZ6mystLWyD3cN+A6u6D815bi20eK4tLmmrZWNt4YoZCxg+XH1XTDiuXbGXJMXt4cDwINtNE189R1FXTOD6eolikabl8cpafzXU7O+0OvoZ2w4y51ZT8M4A3jO/fyW8vj5SdVic+N6r1wBMhVUdTDWU8dRSyNlhkbmY9vAhXrhp3QslZW2SssirKlZXEKJagqISIVlkiEVVZRLVaQlZRVVk1ZZJBnosnZOy2wiE7J2QAqFZFk7IsgVkWUrIIQQIWtx7Eo8IwmprpSPcsJa0/3O5AeZWzIXnPtarQ+OhwtjrOc/fPvwAGg/MrWE3lpnK6jhHsr8brZqosdPPM4lztSSenko4pgtdhsdM+rpyxtQCWNtc+tua9c2Ow+KmwOlDWMuWXJtqb91ua2hpauDdzxNeL31HBdpzZb6YvDjrt4LFs9ic9OZ2wuIzWtbVYlZhdXRktnic0jrqvbqmmZTtLY2ANsuI2kbmfYsBI7LE+Tl9nS/FwuPTVbAbWnAqv7JXPccOlOo47l3xAdOq9pje2RjXsIc1wuCDoQvnPEIwyQZWtaDpoF7fsDI+bZDC3yOLnCHLc9ASAtc+Ms+0cuHKy3GugRZOylZcHZCyCpkKJCggQokKyyiQoqshRsrCFEhQRQnZCLtnITQtMgITQqI8000IEkpIQRsvO/axQtf8A6XVOAa3emJ77XNjqPqvRlpNo8NgxOkqYKhheWsbJDr91wJ1C1jfrdpcftNMSqhENFHmxA0FDGxoGTRzvX9Fz+HY0XYy2losdrp4Q6wjmpw5p52zEX4d128dKx9KwyBriBcAi6xWYTSsqjWGNol4X4fgrvUbmttBtxj/+jRxxtLG1EzfCS24HouCxWWrcf43GqczuAduWwWtfhqul9rFHIX0c722Y0ZT17LUU1BDi2Hb+rkc57W/faAMwHU2WsbjjN1my26jl66O1IHyOAIdyFwV7bsXSOo9lsLhe0h32dr3A8QXeL6rx6qpg9pjNxDvBc9tV63sC+qm2eY+sldKd7II3ONzkBsFeS7xZmFmW3RgJphOy4tIIIUiEkFZUVYQolQQKiplKyioWQp2STQy7Jp2QqgsiyaFQk0IQCEWRZAKiWna9xeRd2Ww7K+yLIMOimOSzrXboVi1EsZ3oDnudz3ZIy+vIq6Ru4neOuvmCtfX4dDU2klEjg0aRhxyn06qy9NyTe3GbeRnENy/7XK0RaCnuCbczfmtfS1WHw4I+mo3ESMHiD9D5rYY/hgfBK2GjLTYe8c9xIHQLk5HBkLYS33g8N+a1O55aykxu4zcIwuvxoTQ0MO9c0B0gLg2zfX98V6zsth82GYDSUlS1olYDmDdQCSTxWj9mdA2DC56oavmkDSegb/6SuzAJOqlvpzpAKVkwE7LKIEKJCssUiEFRUSFaQoEKCshKykQlZBGyFKyFBlJpJhUL0T9E0KhITQgEITQJHJClu3ZHOsQACbdbBWS3wlsnlrq9meXLezsuhC5ep2jlwqd0WKU+7aD4JR914/fJdBTTS1TRLOGte7kwWAHJQr4mSRObKxrmkai11J5dPTgtoNqqSrbII5mW/ty9VxTJpZ6kyODQDwueC6rHMKjfOTTwbsZrAAcVTJgTaWIOk+9a63jnjIZYZZWO69m7g7Z9zb3LJ3Xt6H6rrWheR7NY5X4ZiMFHR5HwzzDeMcOI4EjobfkvUqPEoKkagxO6P5qWXyxlZLplpp6IWUJRPkppFBWVAqwhKyKrt2UbKxKyCuyFZZCgusiyAhAIQhUNCFdDTufZzh4eiuONt6TLKSdqgC4+HVTEJ/uNlkGIt0A0UgGkWJK748Ujz5ctvhCFkZ00Dh15qeRoFxcEG5F7go3Q7J5bLrJHO21paimFNO6O3hOsZHMfqFiSPy+EhdFNGyePJKwPbxAPI9ui1s+GPcRu5hbpILn5hcM+G76enDmmtZOYqos0mc5bN7LSVkElZIbAkcLdV3z8Ia6NzXPAvxLQrKTC6ejHuY/F8btSuc4Mre3T/TjjOnMbPbLto5HVlWwb9ws1vwDn6lb/AOysuTYanos9zCBoogar1zGSaePLO5XbGa2SIe7OnTkrGVA4SgsPXkrbJPjzNtZYywlXHOxMEEXBuOqVliPY+EZojbsroJjKCC2zhxXDLjuLvjnMlhCiQpqBWGyISsmhFKyFKyEEkJpWUDCEJILIWbyUNHXXyW3yhosBYLCw6OxzHnoFmB1y/Xg5evhx1NvNy3d0pkNpWHk4W9U3gE8AiVt3RdQb/gpOC6uSqyV1Iqtyhs7qJRext0QPFZEIpJuGrR3QQgrcFU4WV5VbgixV1UgeChJoL8uaiXDO030sqbKqIjh3h4ZrLDp3OMuf4h+CMdeW0FHGNN5LZ57BNuhuORWbNzSy67ZZcOSLpEDQjgRcIC8eXVezG7hoRdMWUAmiwQgaEIWWhZAve3VCvo2Z6htwbDUrWM3dM5XU2yme5mgj6sPzSzOBmaDqD9FTicu6qqR/Dxhp9dFKR2WrLTwez8QvdOunjt32tD85BHQWV0mhyjnwWFTOvlaORylWwS70ySDXxFjPIIiTgRdVu5d1aR6qlzvfAW0aiIOd4n9tFKnuTfosd7tZfNZVGDuS5AnH+Ka3o0lSI0VAdetP+KyXIKiqna3VjlQXAEg9UVU92VYlQ8QyWzXaQHEfCnUzAZ2ki4dlWqkqBNtA+mc4e8oGlrfJxv8AmlNL9qakMkw+nabukkAb6kfS6ywQ2ndI42FyVpcZYanaPDZAbxQB59QLfVbav0hip28X2H6qbX1GeARTwX47sXSV84tGzsLKhebln5bejiv4mEwkEXXN1TQhCBoSQsKa2GGtsxz+psFr1t4I93Exg5Bd+Gby248t1NNTtU/d0bZf+N7XfIgqzEJA1sFQODTr5FVbWN3mFTNH3sht8lRRPbXYLCHf7sAv8l6Pbh6XQTljKiYWtmAHn+yFm4dHu6SO+pIufMrm8F3j5q2BzybCM273dr+AXVNADAByCsSzSVtfJYofd56ucrZnZIXu6BY1GN4/OeDQtIxXu9/Mz/utpEN3T2Wqpxva99tfFqttLZsenIKIwoz/ABZWY5YEP80uWa3VpQVE6uWFM+z3FXskzF3UOWsrqgNqTFbW2Yd0WMPFi9tSXtHge0E25WWiqpsu3uDvBAbLTvBPaxK3OKuP2QOOjhGVxW2EslNDhlZGSJjTyRteOLSRoVK3jHUYxOGYvg0ELmP31Qd6Wm5aBrb5WW5/qKxryNM2gXObKMjrIIaoNFo2fZqcfCOMj/MnT07rq4mATtaNANFIl66bCo/lgdljBZcw8I8lhnRY5p1tvhurpIJqKYXmelJNJCAKV00LKraUB1RG08CVtzo5CF6fj+Hm5vLU4z4onNPAhaPA5HDCoGg6NcQPK5Qhdf6c/wCRhRy7Qzkc4Bfv4l1DSShCYmSnEiW02nMopzloyRx1SQtMsXBxd0rjxzFbCo/llCEGBB90nusyI+FCEGuicRWSjktRjvgxCF7eNwPzTQlWKMX/AKR/+K5jGaeOvxA0VQLwQUMsjAPi3R1/FCFjN0wbH2bC2Cwc7Zj8yuxgA310IVx8MZ+WbLzWI7ihCnJ+tXD9oOSAUIXjes7oQhVH/9k="}
            
            alt=""
            className="widgetimg"
          />
          <div className="widgetuser">
            <span className="username">{user.username}</span>
          
          </div>
          <button className="displaybtn">
            <Visibility className="iconbtn" /> Display
          </button>
        </li>

      ))}
        
        
      </ul>
    </div>
  );
}
