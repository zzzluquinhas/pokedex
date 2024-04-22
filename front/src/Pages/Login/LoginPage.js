import React, { useState } from 'react';
import { SignUpModal } from './SignUpModal';
import './LoginPage.css';

export function LoginPage(){
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form submission
    const username = event.target.uname.value;
    const password = event.target.psw.value;

    // Send GET request to backend
    fetch(`localhost:5000/getUser?login=${username}&password=${password}`, { // Changed 'username' to 'login'
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        // Add any other headers if needed
      },
      // Add any request body if needed
    })
    .then(response => {
      if (response.ok) {
        console.log(response);
      } else {
        console.log("TOMA NO CUUUU");
      }
    })
    .catch(error => {
      console.log("CARALHOO");
      console.log(error);
    });
  };

  return (
    <>  
      <div className='login-cont'>
        <div className='login-page-container'>
          <div className="form-container">
            <form onSubmit={handleLogin} className='login-form'>
              <label htmlFor="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required />

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />

              <button className="form-btn" type="submit">Login</button>
            </form>
          </div>
          <button className="form-btn" onClick={() => setIsOpen(true)}>Sign Up</button>
        </div>
      </div>
      <SignUpModal isOpen={isOpen} setSignUp={setIsOpen} />
    </>
  );
}
