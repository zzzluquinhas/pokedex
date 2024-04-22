// SignUpModal.js
import React from "react";
import "./SignUpModal.css";

export function SignUpModal({ isOpen, setSignUp }) { // Corrected function name
  if (isOpen) {
    return (
      <div className="sign-up-modal">
        <form className="modal-content">
          <div className="container">
            <div className="top-bar">
              <h1>Sign Up</h1>
              <button className="close-btn" onClick={() => setSignUp(false)}></button> {/* Corrected function name */}
            </div>
            <label htmlFor="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" required />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
            <button type="submit" className="signup-btn">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
  return null;
}
