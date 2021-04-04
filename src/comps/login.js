import React, { useState } from "react";
import sample from "../assets/video.mp4";
import "./login.css";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  


  
  var data = { username: username, secret: password };
  var config = {
    method: "get",
    url: "https://api.chatengine.io/users/",
    headers: {
      "PRIVATE-KEY": "ad2763c6-6525-474d-941d-ca87132847a2",
    },
    data: data,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  

  return (
    <div>
      <video className="videoTag" style={{ zIndex: -1 }} autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
      <div id="tsparticles"></div>
      <div className="login-box">
        <h2>Login</h2>
        <form  onSubmit={ handleSubmit }>
          <div className="user-box">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              placeholder="Username"
              required
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Password"
              required
            />
            <label>Password</label>
          </div>
          <p
            className="text-center my-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

