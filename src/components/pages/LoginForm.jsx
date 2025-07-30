import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/Sports-Background.jpg"; // adjust this path as needed

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
    <div className="min-h-screen bg-[url('/sport-background.jpg')] bg-cover bg-center flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl flex flex-col md:flex-row overflow-hidden">
        {/* Left: Form Section */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Welcome Back!
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Hello there, Please enter your details
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Mobile
              </label>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <button className="text-green-600 hover:underline">Forgot Password?</button>
            </div> */}

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-full transition my-4"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-4 text-sm">
            Don’t have an account?
            <button
              onClick={handleSignClick}
              className="text-green-600 ml-1 hover:underline"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="hidden md:flex w-1/2 bg-gray-50 justify-center items-center p-6">
          <img
            src={loginImage}
            alt="Login illustration"
            className="max-h-[400px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
