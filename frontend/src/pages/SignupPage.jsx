import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/register", formData);

      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      alert(err.response.data.message || "Signup failed");
    }
  };

  return (
    <section className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612278675615-7b093b07772d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900')" }}>
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-lg w-[90%] max-w-md text-center border border-yellow-200/30">
        <h2 className="text-3xl font-bold text-white mb-4">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input name="name" onChange={handleChange} placeholder="Full Name" className="w-full px-4 py-2 bg-transparent border-b border-gray-300 text-white placeholder-gray-200 focus:outline-none"/>
          <input name="email" onChange={handleChange} placeholder="Email" className="w-full px-4 py-2 bg-transparent border-b border-gray-300 text-white placeholder-gray-200 focus:outline-none"/>
          <input name="password" onChange={handleChange} placeholder="Password" type="password" className="w-full px-4 py-2 bg-transparent border-b border-gray-300 text-white placeholder-gray-200 focus:outline-none"/>
          <button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold py-2 rounded-full hover:from-yellow-600 hover:to-yellow-700 transition">SIGN UP</button>
        </form>
        <p className="text-sm text-gray-200 mt-6">
          Already have an account? <Link to="/login" className="text-yellow-400 hover:underline">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
