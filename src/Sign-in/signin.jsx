import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { login, forgotPassword, verifyOtp } from "../apiroutes/authApi";

export default function SignIn({ setShowSignIn, setShowSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value);

  const handleSignIn = async () => {
    const fieldErrors = {};

    if (!email) fieldErrors.email = "Email is required";
    else if (!isValidEmail(email)) fieldErrors.email = "Invalid email address";

    if (!password) fieldErrors.password = "Password is required";
    else if (password.length < 6)
      fieldErrors.password = "Password must be at least 6 characters";

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    try {
      setLoading(true);
      const response = await login({ email, password }); // ✅ API call
      alert("Login successful ✅");
      console.log("User Data:", response.data);
      setShowSignIn(false);
    } catch (error) {
      alert(error.response?.data?.message || "Login failed ❌");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!resetEmail) {
      alert("Please enter your email");
      return;
    }
    if (!isValidEmail(resetEmail)) {
      alert("Invalid email format");
      return;
    }

    try {
      setResetLoading(true);
      const response = await axios.post(
        "https://e-commerce-backend-zrxv.onrender.com/auth/forgot-password",
        { email: resetEmail }
      );
      alert(response.data?.message || "Password reset link sent ✅");

      // ✅ Show OTP field after sending reset link
      setShowOtpField(true);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to send reset link ❌");
    } finally {
      setResetLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      alert("Please enter the OTP");
      return;
    }

    try {
      const response = await axios.post(
        "https://e-commerce-backend-zrxv.onrender.com/auth/verify-otp",
        { email: resetEmail, otp }
      );
      alert(response.data?.message || "OTP verified ✅");
      setShowForgotPassword(false);
      setShowOtpField(false);
      setOtp("");
    } catch (error) {
      alert(error.response?.data?.message || "Invalid OTP ❌");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-[999]">
      <div className="relative w-[850px] h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden flex">
        {/* Close Button */}
        <button
          onClick={() => setShowSignIn(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 cursor-pointer text-3xl z-20"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Left Panel */}
        <div className="w-1/2 bg-gradient-to-br from-yellow-400 to-orange-500 flex flex-col justify-center items-center text-white p-8 relative overflow-hidden">
          <h2 className="z-10 text-3xl font-bold mb-2">Welcome Back!</h2>
          <p className="z-10 text-sm text-center max-w-xs">
            Sign in to continue shopping your favorite items and enjoy exclusive
            deals.
          </p>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Sign in to your account
          </h3>

          {/* Email Input */}
          <div className="flex flex-col mb-4">
            <div className="flex items-center border-b border-gray-300 focus-within:border-[#2874f0]">
              <FaEnvelope className="text-gray-400 text-sm mr-2" />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full outline-none text-sm py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="flex flex-col mb-2">
            <div className="flex items-center border-b border-gray-300 focus-within:border-[#2874f0]">
              <FaLock className="text-gray-400 text-sm mr-2" />
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full outline-none text-sm py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          {/* Forgot Password */}
          <button
            type="button"
            onClick={() => setShowForgotPassword(true)}
            className="text-xs text-[#2874f0] hover:underline self-end mb-4"
          >
            Forgot Password?
          </button>

          {/* Terms */}
          <p className="text-xs text-gray-500 mb-5">
            By continuing, you agree to ShopEasy's{" "}
            <a href="#" className="text-[#2874f0] hover:underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#2874f0] hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          {/* Sign In Button */}
          <button
            onClick={handleSignIn}
            disabled={loading}
            className={`bg-[#fb641b] hover:bg-[#e65c16] text-white text-sm font-medium py-3 rounded-sm shadow cursor-pointer ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          {/* Create Account */}
          <p className="mt-auto text-xs text-center text-gray-700">
            New to ShopEasy?{" "}
            <button
              onClick={() => {
                setShowSignIn(false);
                setShowSignUp(true);
              }}
              className="text-[#2874f0] font-medium hover:underline cursor-pointer"
            >
              Create an account
            </button>
          </p>
        </div>
      </div>

      {/* Forgot Password Modal (No black background) */}
      {showForgotPassword && (
        <div className="fixed inset-0 flex justify-center items-center z-[1000]">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h3 className="text-lg font-bold mb-4">Reset Password</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-4 outline-none focus:border-[#2874f0]"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />

            {/* ✅ Show OTP Field after sending reset link */}
            {showOtpField && (
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-4 outline-none focus:border-[#2874f0]"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            )}

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  setShowForgotPassword(false);
                  setShowOtpField(false);
                  setOtp("");
                }}
                className="px-4 py-2 text-sm bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>

              {!showOtpField ? (
                <button
                  onClick={handleForgotPassword}
                  disabled={resetLoading}
                  className={`px-4 py-2 text-sm bg-[#2874f0] text-white rounded hover:bg-blue-600 ${
                    resetLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {resetLoading ? "Sending..." : "Send Reset Link"}
                </button>
              ) : (
                <button
                  onClick={handleVerifyOtp}
                  className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Verify OTP
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
