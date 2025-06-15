
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
     errorMessage: null,
    success: false,  // New success state to track successful registration
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
       state.error = false;  // reset error when login attempt starts
      
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
    resetError: (state) => {
  state.error = false;
},
resetSuccess: (state) => {
  state.success = false;
  state.error = false;   // optional reset error as well
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
    
    },
    registerFailure: (state, action) => {
      state.isFetching = false;
      state.success = false;
      state.error = true;
       state.errorMessage = action.payload; // store the error message
    },
    

  },
});

export const { loginStart, loginSuccess, loginFailure, logout,registerStart, resetSuccess,registerSuccess, registerFailure,resetError } = userSlice.actions;
export default userSlice.reducer;

