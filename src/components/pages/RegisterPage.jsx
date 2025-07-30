// src/components/pages/RegisterPage.jsx
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg w-full max-w-lg p-8 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Register
        </h2>
       <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email ID"
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Mobile Number"
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="w-full px-4 py-2 border rounded-md"
          required
        />

        <div className="flex space-x-4">
          <button
            type="Sign Up"
            onClick={handleSignup}
            className="flex-1 bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Create
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400"
          >
            Clear
          </button>
        </div>
        <button
          type="button"
          onClick={handleBack}
          className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400"
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
