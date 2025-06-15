import { loginFailure,loginSuccess,loginStart,registerFailure,registerSuccess,registerStart } from "./userRedux";
import { publicRequest } from "../Components/RequestMethod";
import { resetCart } from "./cartRedux";

export const login = async(dispatch,user)=>{
dispatch(loginStart());
try {
    const res = await publicRequest.post("/auth/login",user);
    
    dispatch(loginSuccess(res.data))
    // Clear the cart from localStorage when a new user logs in
    localStorage.removeItem("cart");  // Removes the cart from localStorage
     // Dispatch action to reset the cart in Redux (if you have a resetCart action)
     dispatch(resetCart());  // Assuming you have an action like resetCart in your cart slice
    // Store the new user in localStorage
     localStorage.setItem("persist:root", JSON.stringify({ user: { currentUser: res.data } }));
    // localStorage.setItem("cart", JSON.stringify([]));
} catch (error) {
    dispatch(loginFailure())
}

}
export const register = async(dispatch,user)=>{
    dispatch(registerStart());
    try {
        const res = await publicRequest.post("/auth/register",user);
        dispatch(registerSuccess(res.data))
        localStorage.removeItem("cart");
        localStorage.setItem("persist:root", JSON.stringify({ user: { currentUser: res.data } }));
    } catch (error) {
         const errorMsg =
      error.response?.data?.message || "Something went wrong during registration";
      console.error("Register error:", error.response?.data || error.message);

        dispatch(registerFailure())
    }
    
    }