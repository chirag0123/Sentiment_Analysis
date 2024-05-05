import React from 'react';
import './Login.css'; 

const Login = () => {
  const handleLogin = () => {
    console.log('Login button clicked');
  };

  return (
    <div className="login-card">
      <h2>SignUp</h2>
      <input type="name" placeholder="Name" className="input-field" />
      <input type="phone" placeholder="phone" className="input-field" />
      <input type="email" placeholder="Email" className="input-field" />
      <input type="password" placeholder="Password" className="input-field" />

      <button onClick={handleLogin} className="login-btn">Signup</button>
    </div>
  );
};

export default Login;
