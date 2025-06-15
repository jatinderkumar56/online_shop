
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../Components/RequestMethod";
import { FaCheckCircle, FaHome } from "react-icons/fa";
import { resetCart } from "../ReduxWork/cartRedux";
import { useDispatch } from "react-redux";
const Success = () => {
  const location = useLocation();
 
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState("");
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!currentUser) return; 
    const TOKEN = currentUser?.accessToken; 
    console.log("Redux Token =>", TOKEN);
    const createOrder = async () => {
      
// console.log("Token Sending =>", `Bearer ${currentUser?.accesstoken}`);
 

      try {
        const res = await userRequest.post("/orders", {
          userID: currentUser._id, 
          products: cart.products.map((item) => ({
            productID: item._id, 
            quantity: item.quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        },
        {
          headers: {
            token: `Bearer ${TOKEN}`, 
          },
        }

        );
  
        console.log("Order Response: ", res.data); 
        setOrderId(res.data._id);
        
            localStorage.removeItem("cart");  
            
             dispatch(resetCart());  
      } catch (err) {
        console.error("Order Error: ", err.response?.data);
      }
    };
  
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
   
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #00c6ff, #0072ff)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
    
      <FaCheckCircle size={80} color="white" style={{ marginBottom: 20 }} />
      <h1 style={{ fontSize: "2rem", marginBottom: 10 }}>
        {orderId ? "Order Placed Successfully!" : "Payment Successful!"}
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
        {orderId
          ? `Your order number is ${orderId}. Thank you for shopping with us!`
          : `Your order is being prepared. Thank you for your purchase!`}
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        style={{
          marginTop: 30,
          padding: "12px 24px",
          fontSize: "1rem",
          fontWeight: "bold",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#ffffff",
          color: "#0072ff",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        }}
      >
        <FaHome />
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;