import { loginFailure,loginSuccess,loginStart,registerFailure,registerSuccess,registerStart } from "./userRedux";
import { publicRequest, userRequest } from './RequestMethod'
import { getProductFailure, getProductStart, getProductSuccess,
  deleteProductFailure,deleteProductSuccess,deleteProductStart,
   updateProductStart, updateProductSuccess, updateProductFailure, 
   addProductStart, addProductSuccess, addProductFailure } from "./productRedux";
// ;import { resetCart } from "./cartsRedux";

// export const login = async(dispatch,user)=>{
// dispatch(loginStart());
// try {
//     const res = await publicRequest.post("/auth/login",user);
    
//     dispatch(loginSuccess(res.data))
//     // Clear the cart from localStorage when a new user logs in
//     localStorage.removeItem("cart");  // Removes the cart from localStorage
//      // Dispatch action to reset the cart in Redux (if you have a resetCart action)
//     //  dispatch(resetCart());  // Assuming you have an action like resetCart in your cart slice
//     // Store the new user in localStorage
//      localStorage.setItem("persist:root", JSON.stringify({ user: { currentUser: res.data } }));
//     // localStorage.setItem("cart", JSON.stringify([]));
// } catch (error) {
//     dispatch(loginFailure())
// }

// }
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async(dispatch,user)=>{
    dispatch(registerStart());
    try {
        const res = await publicRequest.post("/auth/register",user);
        dispatch(registerSuccess(res.data))
        localStorage.removeItem("cart");
        localStorage.setItem("persist:root", JSON.stringify({ user: { currentUser: res.data } }));
    } catch (error) {
        dispatch(registerFailure())
    }
    
    }

    export const getProducts = async (dispatch) => {
        dispatch(getProductStart());
        try {
          const res = await publicRequest.get("/products");
          dispatch(getProductSuccess(res.data));
        } catch (err) {
          dispatch(getProductFailure());
        }
      };
      export const deleteProducts = async (id, dispatch) => {
        dispatch(deleteProductStart());
        try {
          // const res = await userRequest.delete(`/products/${id}`);
          dispatch(deleteProductSuccess(id));
        } catch (err) {
          dispatch(deleteProductFailure());
        }
      };
      export const updateProducts = async (id,product, dispatch) => {
        dispatch(updateProductStart());
        try {
          // const res = await userRequest.delete(`/products/${id}`);
          dispatch(updateProductSuccess({id,product}));
        } catch (err) {
          dispatch(updateProductFailure());
        }
      };
      export const addProducts = async (product, dispatch) => {
        dispatch(addProductStart());
        try {
          const res = await userRequest.post(`/products`,product);
          dispatch(addProductSuccess(res.data));
        } catch (err) {
          dispatch(addProductFailure());
        }
      };