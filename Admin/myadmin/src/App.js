import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import "./App.css";
import UserList from "./Pages/UserList/UserList";
import Home from "./Pages/Home/Home";
import UpdateUser from "./Pages/UpdateUser/UpdateUser";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NewUser from "./Pages/NewUser/NewUser";
import ProductList from "./Pages/Product/ProductList";
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/Product/NewProduct";
import Login from "./Pages/Login";

function App() {
  // const Admin = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root")).user
  // ).currentUser.isAdmin;

  return (
    <Router>
    
     
          <Topbar />
          <div className="container">
            <Sidebar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/userlist" element={<UserList />} />
              <Route path="/user/:userId" element={<UpdateUser />} />
              <Route path="/newuser" element={<NewUser />} />
              <Route path="/product" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newproduct" element={<NewProduct />} />
              <Route path="/login" element={<Login />} />
              </Routes>
          </div>
      
       
    </Router>
  );
}

export default App;
//
