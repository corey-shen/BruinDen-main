"use client";
import { useState, useEffect, useCallback } from "react";
import { FcGoogle } from "react-icons/fc"; // Google icon
import axios from "axios";
import { signIn } from "next-auth/react";

// Define the prop types for the component
interface LoginPageProps {
  onBack: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onBack }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = useCallback(() => {
    // Implement Google login here
  }, []);

  const handleEmailLogin = useCallback(async () => {
    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });
    console.log(email, password);
    if (result?.error) {
      console.error("Login failed:", result.error);
    } else {
      console.log("Login successful:", result);
    }
  }, [email, password]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-[90vw] md:w-[600px]"
        style={{ color: "#2F4858" }}
      >
        <h2 className="text-2xl font-bold mb-4">Log In</h2>
        <button
          onClick={handleGoogleLogin}
          className="w-full mb-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#86bbd8] hover:bg-[#86bbd8] flex items-center justify-center"
        >
          <FcGoogle size={24} />
          Log In with Google
        </button>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 py-2 px-4 border border-gray-300 rounded-md text-sm"
          style={{ color: "#2F4858", fontSize: "0.875rem" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 py-2 px-4 border border-gray-300 rounded-md text-sm"
          style={{ color: "#2F4858", fontSize: "0.875rem" }}
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={onBack}
            className="flex-1 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-300 hover:bg-gray-400"
          >
            Back
          </button>
          <button
            onClick={handleEmailLogin}
            className="flex-1 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#86bbd8] hover:bg-[#86bbd8]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
