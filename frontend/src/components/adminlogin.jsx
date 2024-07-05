// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      const { data } = response;
      localStorage.setItem('userInfo', JSON.stringify(data));
      alert('Login successful!');
      navigate('/home')
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-center text-3xl font-bold m-4'>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin} className='flex flex-col justify-center items-center gap-4 w-1/3'>
        <div className='flex justify-between items-center gap-4 w-full'>
          <label>Email</label>
          <input
            className='border-b-2 border-b-orange-500 outline-none'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='flex justify-between items-center gap-4 w-full'>
          <label>Password</label>
          <input
          className='border-b-2 border-b-orange-500 outline-none'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='border-2 border-green-400 rounded-md px-3 bg-green-400 text-white font-bold m-4' type="submit">Login</button>
      </form>
      <Link to="/register">Haven't Registered? Register</Link>
    </div>
  );
};

export default Login;
