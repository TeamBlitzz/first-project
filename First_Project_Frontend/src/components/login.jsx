import { Link } from "react-router-dom";
import { useState } from "react";
import "./login.css";

export default function login() {
  const [userDetails, setUserDetails] = useState({
    Username: "",
    Password: "",
  });

  function handelInputs(event) {
    setUserDetails((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  function handelSubmit(event) {
    event.preventDefault();
    console.log(userDetails);

    fetch("http://localhost:8000/", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err)=>{
        console.log(err)
      });
  }

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handelSubmit}>
        <div className="main">
          <h1>Login</h1>
          <p>Welcome back! Please login to you account.</p>
          <div className="input-text">
            <label htmlFor="text">Username</label>
          </div>
          <div className="input-box">
            <input
              className="inp-box"
              type="text"
              name="Username"
              onChange={handelInputs}
              value={userDetails.Username}
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
              name="Password"
              onChange={handelInputs}
              value={userDetails.Password}
              required
            ></input>
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox"></input>Remember Me
            </label>
            <a href="/">Forget Password?</a>
          </div>
          <button type="submit" className="btn" onClick={gotoHome}>
            <p className="loginTxt">Login</p>
          </button>
          <div className="register-link">
            <p>
              New User?
              <Link to="/Register"> Register</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

function gotoHome() {
  console.log();
}
