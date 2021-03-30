import React, { useState } from "react";
import sample from "../assets/video.mp4";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };
  return (
    <div>
      <video className="videoTag" style={{zIndex: -1}}  autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
      <div id="tsparticles"></div>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              type="email"
              name="userEmail"
              value={email}
              placeholder="E.g: example123@gmail.com"
              onChange={(event) => onChangeHandler(event)}
              name=""
              required=""
            />
            <label>e-mail</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="userPassword"
              value={password}
              placeholder="Your Password"
              id="userPassword"
              onChange={(event) => onChangeHandler(event)}
            />
            <label>Password</label>
          </div>
          <p className="text-center my-3"  style={{display:'flex', justifyContent:'center'}}>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
          <Link to="signUp">SignUp</Link> <br />{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
