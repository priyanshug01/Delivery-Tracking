/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import '../styles/account.css';

const Account = () => {
  const [activeForm, setActiveForm] = useState('signin');

  const handleSignupClick = () => {
    setActiveForm('signup');
  };

  const handleSigninClick = () => {
    setActiveForm('signin');
  };

  return (
    <div className="container">
      <div className="back">
        <div className="box signin">
          <h2>Already Have an Account?</h2>
          <button className="signinBtn" onClick={handleSigninClick}>Sign In</button>
        </div>
        <div className="box signup">
          <h2>Don't Have an Account?</h2>
          <button className="signupBtn" onClick={handleSignupClick}>Sign Up</button>
        </div>
      </div>
      <div className="formA">
        {activeForm === 'signin' && (
          <div className="form signinForm">
            <form>
              <h3>Sign In</h3>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <input type="submit" value="Login" />
              <a href="#" className="forgot">Forgot Password?</a>
            </form>
          </div>
        )}
        {activeForm === 'signup' && (
          <div className="form signupForm">
            <form>
              <h3>Sign Up</h3>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <input type="submit" value="Sign Up" />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
