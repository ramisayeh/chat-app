import React, { PureComponent } from "react";
import sample from '../assets/video.mp4';
import "./login.css";

class Login extends PureComponent {
  render() {
    return (
      <div>
        <video className='videoTag' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
</video>
          <div id="tsparticles"></div>
<div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required=""/>
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
      </div>
      </div>
    );
  }
}

export default Login;
