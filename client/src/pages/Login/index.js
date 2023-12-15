import React from 'react';
import LoginForm from '../../components/Login/loginForm';
import './style.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-banner">
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/581/154/desktop-wallpaper-backgrounds-for-login-page-login-page.jpg"
          alt="login banner"
        />
      </div>
      <div className="login-form">
        <h2>Login ETE PANEL</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
