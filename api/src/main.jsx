import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Interseptor from "./Components/Interseptor.jsx";


// axios.interceptors.request.use((request)=>{
//   console.log("request: ",request)
//   request.headers.agee="jsdhfiadsfijks"
//   return request
// })
// axios.interceptors.response.use((response)=>{
//   console.log("response :",response)
//   response.headers.Age=11
//   return response
// })

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Interseptor/> */}
    <App />
    
  </StrictMode>
);
