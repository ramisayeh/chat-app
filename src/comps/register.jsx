import React, { useState } from "react";
import sample from "../assets/video.mp4";
import "./reg.css";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };
  return (
    <div>
        <video className="videoTag" style={{zIndex: -1}} autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>
        <div id="tsparticles"></div>
        <div className="login-box">
          <h2>Register</h2>
          <form>
            <div className="user-box">
              <input type="text"
            className="my-1 p-1 w-full "
            name="displayName"
            value={displayName}
            placeholder="E.g: Faruq"
            id="displayName"
            onChange={event => onChangeHandler(event)} />
              <label>Display Name:</label>
            </div>
            <div className="user-box">
              <input type="text" name="" required="" />
              <label>photo URL</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required="" />
              <label>Password</label>
            </div>
            <p
              className="text-center my-3"
              style={{display:'flex', justifyContent:'center'}}
            >
              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a>
              <Link to="signIn">Sign in</Link> <br />{" "}
            </p>
          </form>
        </div>
      </div>
  )
}

export default Register
