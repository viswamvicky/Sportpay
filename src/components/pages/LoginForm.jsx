// src/components/pages/LoginForm.jsx
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/sport.png"; // make sure image exists
import "./LoginForm.css"; // Import the CSS file

const LoginForm = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with:", { emailId, password });
  };

  const handleSignIn = async (e) => {
    try {

      e.preventDefault();
      const res = await axios.post(
        "http://localhost:7777/login",
        { emailID:emailId , password },
        { withCredentials: true }
      );
      console.log("Login successful:", res.data);
      // dispatch(addUser(res.data.data));
      return navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      
    }
  }

  const handleSignClick = () => {
    navigate("register");
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
              <label>Email ID</label>
              <input
                type="text"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                placeholder="Enter your Email ID"
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

            <button type="submit" onClick={handleSignIn} className="login-button">Login</button>
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
