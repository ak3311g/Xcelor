// src/components/Register.js
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // [1]
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users/register", {
        firstName,
        email,
        password,
        role,
      });
      const { data } = response;
      localStorage.setItem("userInfo", JSON.stringify(data));
      alert("Registration successful!");
      navigate("/home");
    } catch (error) {
      setError("User already exists");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full">
      <h2 className="text-4xl font-semibold">Register</h2>
      {error && <p>{error}</p>}
      <form
        onSubmit={handleRegister}
        className="flex flex-col items-center justify-center gap-3 w-1/3"
      >
        <div className="flex justify-between items-center gap-5 w-full">
          <label>Name</label>
          <input
            className="border-b-2 border-orange-400 outline-none"
            type="text"
            value={firstName}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between items-center gap-5 w-full">
          <label>Email</label>
          <input
            className="border-b-2 border-orange-400 outline-none"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between items-center gap-5 w-full">
          <label>Password</label>
          <input
            className="border-b-2 border-orange-400 outline-none"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between items-center gap-5 w-full">
          <label>Role</label>
          <select
            className="border-b-2 border-orange-400 outline-none"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="border-2 border-green-400 rounded-md px-3 bg-green-400 text-white font-bold m-4">Register</button>
        <Link to="/login">Already Registered? Login</Link>
      </form>
    </div>
  );
};

export default Register;
