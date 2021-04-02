import React, { useState } from "react";
import sample from "../assets/video.mp4";
import "./login.css";

import axios from "axios";

const projectID = "589e180c-73a9-42e1-8c9e-61676d54116d";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/users/me/", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      setError("Oops, incorrect credentials.");
    }
  };
  return (
    <div>
      <video className="videoTag" style={{ zIndex: -1 }} autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
      <div id="tsparticles"></div>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
