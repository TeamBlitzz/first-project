import { Link } from "react-router-dom";
import { useState } from "react";

import "./register.css";

export default function register() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    username: "",
    password: "",
  });

  function handelInput(event) {
    setUserDetails((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }
  function handelSubmit(event) {
    event.preventDefault();
    // console.log(userDetails);

    fetch("http://localhost:8000/Register", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handelSubmit}>
        <div className="main">
          <h1>Sign Up</h1>
          <p>Let's start the journey together.</p>

          <div className="email-text">
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-box">
            <input
              className="inp-box"
              type="email"
              name="email"
              onChange={handelInput}
              value={userDetails.email}
              required
            ></input>
          </div>

          <div className="input-text">
            <label htmlFor="text">Username</label>
          </div>
          <div className="input-box">
            <input
              className="inp-box"
              type="text"
              name="username"
              onChange={handelInput}
              value={userDetails.username}
              required
            ></input>
          </div>
          <div className="password-text">
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-box">
            <input
              className="inp-box"
              type="password"
              name="password"
              onChange={handelInput}
              value={userDetails.password}
              required
            ></input>
          </div>
          <button type="submit" className="btn">
            <p className="loginTxt">Sign Up</p>
          </button>
          <div className="register-link">
            <p>
              Already Registered? <Link to="/">Login</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
