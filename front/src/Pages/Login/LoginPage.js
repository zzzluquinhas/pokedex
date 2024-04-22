import React, { useState } from 'react';
import { SignUpModal } from './SignUpModal';
import './LoginPage.css';

export function LoginPage({ onLogin }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("");

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form submission
    const username = event.target.uname.value;
    const password = event.target.psw.value;
    fetch(`http://localhost:5000/getUser?user=${username}&password=${password}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      if (response.ok) {
        return response.json(); // Parse response JSON
      } else {
        throw new Error('Invalid credentials'); // Throw error for non-OK responses
      }
    })
    .then(data => {
      console.log(data); // Handle successful response data
      setUser(username); // Set the user state with received data
      onLogin(username); // Call the onLogin function with user data
    })
    .catch(error => {
      console.error('Error logging in:', error.message); // Handle errors
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
