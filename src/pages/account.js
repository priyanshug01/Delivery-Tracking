import React, { useState } from 'react';
import '../styles/account.css';
import clogo from '../images/cmy-logo.png';

const Account = () => {
  const [activeForm, setActiveForm] = useState('signin');

  const handleSignupClick = () => {
    setActiveForm('signup');
  };

  const handleSigninClick = () => {
    setActiveForm('signin');
  };

  return (
    <>
      <div className="acc-heading">Accounts</div>
      <img src={clogo} alt="Company Logo" className='cmpny-logo'/>
      <div className={`acc-page ${activeForm === 'signup' ? 'active' : ''}`}>
        <div className={`acc-container ${activeForm === 'signup' ? 'active' : ''}`}>
          <div className="backg">
            <div className="acc-box signin">
              <h2>Already Have an Account?</h2>
              <button className="signinBtn" onClick={handleSigninClick}>Sign In</button>
            </div>
            <div className="acc-box signup">
              <h2>Don't Have an Account?</h2>
              <button className="signupBtn" onClick={handleSignupClick}>Sign Up</button>
            </div>
          </div>
          <div className={`acc-form ${activeForm === 'signup' ? 'active' : ''}`}>
            <div className={`form signinForm ${activeForm === 'signin' ? 'active' : ''}`}>
              <form>
                <h3>Sign In</h3>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <input type="submit" value="Login" />
                <a href="#" className="forget">Forgot Password?</a>
              </form>
            </div>
            <div className={`form signupForm ${activeForm === 'signup' ? 'active' : ''}`}>
              <form>
                <h3>Sign Up</h3>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email Address" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />
                <input type="submit" value="Sign Up" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
