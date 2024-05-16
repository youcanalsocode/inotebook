import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const history = useNavigate();

  useEffect(() => {
    // Perform logout logic
    localStorage.removeItem("token"); // Remove the token from localStorage
    alert("Logged out successfully!"); // Optionally, display an alert
    history("/login"); // Redirect to the login page
  }, [history]);

  return null; // Return null as this component doesn't render anything
}
