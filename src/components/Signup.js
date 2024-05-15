import React, { useState } from "react";

export default function Signup() {
  let host = "http://localhost:5000";
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlesubmit = async (e) => {
    console.log(credentials.email);
    console.log(credentials.password);
    console.log(credentials.name);

    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const jsonres = await response.json();

    console.log(jsonres);
  };
  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="form-group">
          <label htmlFor="name">Enter your Name</label>
          <input
            type="name"
            className="form-control"
            id="name"
            aria-describedby="name"
            placeholder="name"
            name="name"
            onChange={onchange}
          />
        </div>
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
          Submit
        </button>
      </form>
    </div>
  );
}
