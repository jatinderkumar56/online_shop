
import axios from "axios";

const BASE_URL = "https://ecommerce-web-1-fdu6.onrender.com/api/";


let TOKEN = "";

try {
  const persistRoot = localStorage.getItem("persist:root");
  if (persistRoot) {
    const parsedRoot = JSON.parse(persistRoot);
    const user = parsedRoot?.user ? JSON.parse(parsedRoot.user) : null;
    TOKEN = user?.currentUser?.accessToken || "";
  }
} catch (error) {
  console.warn("Failed to parse access token from localStorage:", error);
}

console.log("USER TOKEN:", TOKEN); 

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: TOKEN ? `Bearer ${TOKEN}` : "",
  },
});

