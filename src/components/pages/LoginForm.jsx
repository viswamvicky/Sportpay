// src/components/pages/LoginForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/sport.png"; // make sure image exists
import "./LoginForm.css"; // Import the CSS file

const LoginForm = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with:", { mobile, password });
  };

  const handleSignClick = () => {
    navigate("/register");
  };

  return (
    <div className="">
      <div className="login-wrapper">
        {/* Left: Form Section */}
        <div className="login-form">
          <h2>Welcome Back!</h2>
          <p>Hello there, Please enter your details</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Mobile</label>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="login-button">Login</button>
          </form>

          <div className="signup-text">
            Don’t have an account?
            <button onClick={handleSignClick} className="signup-button">
              Sign Up
            </button>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="login-image">
          <img src={loginImage} alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
