// SignUpModal.js
import React from "react";
import "./SignUpModal.css";

export function SignUpModal({ isOpen, setSignUp }) { // Corrected function name

  const handleSignUp = (event) => {
    event.preventDefault(); // Prevent form submission
    const username = event.target.username.value;
    const password = event.target.psw.value;
    fetch(`http://localhost:5000/createUser?user=${username}&password=${password}`, {
      method: 'POST',
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
    })
    .catch(error => {
      console.error('Error logging in:', error.message); // Handle errors
    });
  };
  

  if (isOpen) {
    return (
      <div className="sign-up-modal">
        <form  onSubmit={handleSignUp} className="modal-content">
          <div className="container">
            <div className="top-bar">
              <h1>Sign Up</h1>
              <button className="close-btn" onClick={() => setSignUp(false)}></button> {/* Corrected function name */}
            </div>
            <label htmlFor="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" required />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <button type="submit" className="signup-btn">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
  return null;
}
