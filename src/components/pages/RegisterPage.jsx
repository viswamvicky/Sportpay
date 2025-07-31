// src/components/pages/RegisterPage.jsx
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css"; // Import the CSS file

const RegisterPage = () => {
  const [formData, setFormData] = useState({
   email: "",
    mobile: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({email:"", mobile: "", name: "", password: "", confirmPassword: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering:", formData);
  };

  const handleSignup = async () => {
    
    try {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;}
      const res = await axios.post(
        "http://localhost:7777/signup",
        {
          fullName: formData.name,
          phoneNumber: formData.mobile,
          emailID: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      );
      console.log("Registration successful:", res.data);
      // dispatch(addUser(res.data.data));
      return navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleBack = () => {
    navigate("/"); // Navigate back to home or previous page
  };

  return (
  <div className="form-container">
  <form onSubmit={handleSubmit} className="form">
    <h2 className="form-title">Register</h2>

    <input
      type="text"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Email ID"
      className="form-input"
      required
    />
    <input
      type="text"
      name="mobile"
      value={formData.mobile}
      onChange={handleChange}
      placeholder="Mobile Number"
      className="form-input"
      required
    />
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Full Name"
      className="form-input"
      required
    />
    <input
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="Password"
      className="form-input"
      required
    />
    <input
      type="password"
      name="confirmPassword"
      value={formData.confirmPassword}
      onChange={handleChange}
      placeholder="Confirm Password"
      className="form-input"
      required
    />

    <div className="form-buttons">
      <button
        type="submit"
        onClick={handleSignup}
        className="btn btn-green"
      >
        Create
      </button>
      <button
        type="button"
        onClick={handleClear}
        className="btn btn-gray"
      >
        Clear
      </button>
    </div>

    <button
      type="button"
      onClick={handleBack}
      className="btn btn-gray full-width"
    >
      Back
    </button>
  </form>
</div>

  );
};

export default RegisterPage;
