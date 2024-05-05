import React from 'react';
import './Login.css'; 

const Login = () => {
  const handleLogin = () => {
    console.log('Login button clicked');
  };

  return (
    <div className="login-card">
      <h2>Login</h2>
      <input type="email" placeholder="Email" className="input-field" />
      <input type="password" placeholder="Password" className="input-field" />
      <button onClick={handleLogin} className="login-btn">Login</button>
      {/* <div className="social-login">
        <button className="google-btn"><i className="fab fa-google"></i> Login with Google</button>
        <button className="twitter-btn"><i className="fab fa-twitter"></i> Login with Twitter</button>
      </div> */}
    </div>
  );
};

export default Login;
