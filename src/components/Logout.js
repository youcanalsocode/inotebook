import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout(props) {
  const history = useNavigate();

  useEffect(() => {
    // Perform logout logic
    localStorage.removeItem("token"); // Remove the token from localStorage

    history("/login"); // Redirect to the login page

    props.showaleart("Logged out", "success");
  }, [history]);

  return null; // Return null as this component doesn't render anything
}
