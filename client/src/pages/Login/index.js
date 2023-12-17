import { Typography } from 'antd';
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
        <Typography.Title>Login ETE PANEL</Typography.Title>
        <LoginForm />
        <Typography.Text>
          If you do not have an account,
          <a href="/register"> click to create an account.</a>
        </Typography.Text>
      </div>
    </div>
  );
};

export default Login;
