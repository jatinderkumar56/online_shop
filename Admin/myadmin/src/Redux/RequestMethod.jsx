// // import { current } from "@reduxjs/toolkit";ser
// import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";


// // .....................
// // Function to safely get the access token from localStorage
// // const TOKEN=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
// const TOKEN=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
//   // Function to safely get the access token from localStorage
// // const getAccessToken = () => {
// //   // Safely parse the localStorage data and check for `currentUser` and `accessToken`
// //   const persistData = JSON.parse(localStorage.getItem("persist:root"));
// //   if (!persistData) return null;  // Return null if no persist data found

// //   const userData = JSON.parse(persistData.user);
// //   if (!userData || !userData.currentUser || !userData.currentUser.accessToken) {
// //     return null;  // Return null if there's no accessToken available
// //   }

// //   return userData.currentUser.accessToken;
// // };

// // // ................
// // // const TOKEN="feyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ODFhMjkxYjc1NGQ5YzJiZTNhZDJmOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc0MTE1NTA5OCwiZXhwIjoxNzQxNDE0Mjk4fQ.3uxKnw2Qin4RPqupiCAnb3Ouf8NQrXvrl9O3vMNvcqU"
// // // const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken || "";
// // const TOKEN = getAccessToken();
// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     // Only add the token to headers if it exists
//     token: TOKEN ? `Bearer ${TOKEN}` : "",
//   },
  
// });

import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

let TOKEN = "";

try {
  const persistRoot = localStorage.getItem("persist:root");
  if (persistRoot) {
    const parsedRoot = JSON.parse(persistRoot);
    const user = parsedRoot?.user ? JSON.parse(parsedRoot.user) : null;
    TOKEN = user?.currentUser?.accessToken || "";
  }
} catch (err) {
  console.warn("Error reading token from localStorage:", err);
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: TOKEN ? `Bearer ${TOKEN}` : "",
  },
});
