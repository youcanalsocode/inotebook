import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  let history = useNavigate();
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  const isLoggedin = localStorage.getItem("token");
  // alert(isLoggedin);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg  
      navbar-dark bg-dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/About" ? "active" : ""
                  }`}
                  to="/About"
                >
                  About
                </Link>
              </li>
            </ul>

            {isLoggedin ? (
              <>
                {" "}
                <Link
                  className="btn btn-primary mx-1"
                  to="/Logout"
                  role="button"
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                {" "}
                <Link
                  className="btn btn-primary mx-1"
                  to="/Login"
                  role="button"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-primary mx-1"
                  to="/Signup"
                  role="button"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
