import { Navigate } from "react-router-dom";
import React from "react";
import UserProfile2 from "../components/UserProfile/UserProfile2";
import MfPage from "../components/MfPage/MfPage";

const PrivateRoutes = () => {

  const loggedInStatus = localStorage.getItem("isLoggedIn");
  const userType = localStorage.getItem("userType");
  console.log(loggedInStatus);
  console.log("(",userType,")");
   return loggedInStatus ? (
     userType === "Owner" ? (
       <UserProfile2 />
     ) : (
       <MfPage />
      //  <UserProfile2 />
     )
   ) : (
     <Navigate to="/" />
   );
  
};

export default PrivateRoutes;
