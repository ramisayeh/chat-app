import React, { useState } from "react";
import sample from "../assets/video.mp4";
import "./reg.css";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const userid = localStorage.getItem('userid');


  // var data1 = { username: username };
  // var config1 = {
  //   method: "patch",
  //   url: "https://api.chatengine.io/users/" + userid + "/",
  //   headers: {
  //     "PRIVATE-KEY": "ad2763c6-6525-474d-941d-ca87132847a2",
  //   },
  //   data: data1,
  // };
  // const handleUpdate = async (e) => {
  //   axios(config1)
  //     .then(function (response) {
  //       console.log("done", JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };


  var data = { username: username, secret: username };
  

  var config = {
    method: "post",
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
        // window.location.replace("http://localhost:3000/signIn");
        localStorage.setItem("userid", response.data.id);
        console.log(response.data.id);

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
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit && handleUpdate} >
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
}

export default Register;
