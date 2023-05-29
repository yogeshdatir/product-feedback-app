import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.PROD
    ? "https://product-feedback-app-sage.vercel.app/"
    : "http://localhost:5000/",
  headers: {
    "Content-type": "application/json",
  },
});
