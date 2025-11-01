import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Correct endpoint (no extra /api if your server.js uses app.use("/auth", authRoutes))
      const res = await axios.post("http://localhost:5000/auth/login", formData);
      const { token, user, role } = res.data; // ✅ Extract role here

      // ✅ Save both token and full user info in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...user,
          role, // ✅ include role manually since backend sends it separately
        })
      );

      // ✅ Redirect based on role
      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80')",
      }}
    >
      <div className="bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-10 w-[90%] max-w-md text-white text-center transition-transform duration-300 hover:scale-[1.02]">
        <h2 className="text-4xl font-bold mb-6 text-yellow-300 drop-shadow-lg">
          Welcome Back 🌍
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/25 transition-all"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/25 transition-all"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-3 rounded-lg shadow-xl hover:shadow-yellow-400/50 hover:scale-105 transition-transform duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-white/80">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-yellow-300 font-medium cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
