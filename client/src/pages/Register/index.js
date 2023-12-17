import React from 'react';
import RegisterForm from '../../components/Register/registerForm';
import './style.css';

const Register = () => {
  return (
    <div className="login-container">
      <div className="login-banner">
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/581/154/desktop-wallpaper-backgrounds-for-login-page-login-page.jpg"
          alt="login banner"
        />
      </div>
      <div className="login-form">
        <h2>Register ETE PANEL</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
