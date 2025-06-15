import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollTop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Success from './Pages/Success';
import { useSelector } from 'react-redux';
function App() {
  const user=useSelector(state=>state.user.currentUser);
  // const user=false;
  return (
    <Router>
    <ScrollToTop/>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/products/:category" element={<ProductList />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/cart" element={<Cart />} />
    
    <Route path="/login" element={ user ? <Navigate to='/'/>:<Login/>} />
   
    <Route path="/register" element={ user ? <Navigate to='/'/>:<Register />} />
    <Route path='/success' element={<Success/>}/>
    </Routes>
    </Router>
  );
}

export default App;

  