//Importing all the needed libraries and all
import { Link } from "react-router-dom";
import { useState } from "react";
import "./login.css";

//defining login function
export default function login() {
  //useState definition for user details and all the fields  
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  //function to handel inputs i.e. fill userDetails fields with entered values in text box
  function handelInputs(event) {
    setUserDetails((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value }; //this is the syntax, learn on the go
    });
  }

  //function to handel submit and call apis
  function handelSubmit(event) {
    event.preventDefault();
    console.log(userDetails);

    //calling backend api here
    fetch("http://localhost:8000/", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json()) //for getting only the sent response from backend and removing other info
      .then((data)=>{console.log(data)})
      .catch((err) => {
        console.log(err);
      });
  }
  //basic HTML and for form design
  return (
    <div className="wrapper">
      <form className="form" onSubmit={handelSubmit}>
        <div className="main">
          <h1>Login</h1>
          <p>Welcome back! Please login to you account.</p>
          <div className="input-text">
            <label htmlFor="text">Email</label>
          </div>
          <div className="input-box">
            <input
              className="inp-box"
              type="email"
              name="email"
              onChange={handelInputs}
              value={userDetails.email}
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
