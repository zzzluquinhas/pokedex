// LoginPage.js
import React, { useState } from 'react';
import { SignUpModal } from './SignUpModal';
import './LoginPage.css';

export function LoginPage(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>  
      <div className='login-cont'>
        <div className='login-page-container'>
          <div className="form-container">
            <form action="action_page.php" method="post" className='login-form'>
              <label htmlFor="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required />

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />

              <button className="form-btn" type="submit" >Login</button>
            </form>
          </div>
          <button className="form-btn" onClick={() => setIsOpen(true)}>Sign Up</button>
        </div>
      </div>
      <SignUpModal isOpen={isOpen} setSignUp={setIsOpen} /> {/* Corrected function name */}
    </>
  );
}
