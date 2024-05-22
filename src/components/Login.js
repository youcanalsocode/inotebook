import React, { useState } from "react";
import Aleart from "./Aleart";
import { useNavigate } from "react-router-dom"; // in react don version 6 there are many things replaced so instead of useHistory one should use useNavigate

// import Aleart from "./Aleart";

export default function Login(props) {
  let host = "http://localhost:5000";
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  let history = useNavigate();
  const handlesubmit = async (e) => {
    console.log(credentials.email);
    console.log(credentials.password);

    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const jsonres = await response.json();

    if (jsonres.success) {
      localStorage.setItem("token", jsonres.authtoken);
      //history.push("/"); older version
      props.showaleart("You have been logged in succesfylly", "success");
      history("/");
    } else {
      props.showaleart(
        "Please enter correct credentials/new user-signup",
        "warning"
      );
    }
    console.log(jsonres);
  };
  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            onChange={onchange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            onChange={onchange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
