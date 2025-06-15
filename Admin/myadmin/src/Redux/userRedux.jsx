
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    success: false,  // New success state to track successful registration
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      
      state.currentUser = action.payload; // ✅ This will save token
      // localStorage.setItem("user", JSON.stringify(action.payload));
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("persist:root");
      localStorage.removeItem("cart") // ✅ Yeh Clear Kar Raha hai Token
    },
    // ...........REGISTER...................
    registerStart: (state) => {
      state.isFetching = true;
      state.success = false;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.success = true;
      state.currentUser = action.payload; // ✅ This will save token
      // localStorage.setItem("user", JSON.stringify(action.payload));
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.success = false;
      state.error = true;
    },
    

  },
});

export const { loginStart, loginSuccess, loginFailure, logout,registerStart, registerSuccess, registerFailure } = userSlice.actions;
export default userSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     currentUser: null,
//     isFetching: false,
//     error: false,
//   },
//   reducers: {
//     loginStart: (state) => {
//       state.isFetching = true;
//     },
//     loginSuccess: (state, action) => {
//       state.isFetching = false;
//       state.currentUser = action.payload;
//     },
//     loginFailure: (state) => {
//       state.isFetching = false;
//       state.error = true;
//     },
//     logout: (state) => {
//       state.currentUser = null;
//       localStorage.removeItem("persist:root"); 
//     },
//   },
// });

// export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
// export default userSlice.reducer;