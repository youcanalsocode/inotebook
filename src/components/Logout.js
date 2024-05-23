import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout(props) {
  const history = useNavigate();
  const { showaleart } = props;
  useEffect(() => {
    // Perform logout logic
    localStorage.removeItem("token"); // Remove the token from localStorage

    history("/login"); // Redirect to the login page

    showaleart("Logged out", "success");
  }, [showaleart, history]);

  return null; // Return null as this component doesn't render anything
}
