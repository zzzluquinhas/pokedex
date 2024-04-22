import React, { useState } from 'react';
import { SignUpModal } from './SignUpModal';
import { toast } from 'react-toastify';
import myLogo from '../../assets/icons/logo.png';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export function LoginPage({ onLogin }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

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
      setUser(username); // Set the user state with received data
      onLogin(username); // Call the onLogin function with user data
      toast.success('Login successful');
      navigate('/pokedex'); 
    })
    .catch(error => {
      console.error('Error logging in:', error.message); // Handle errors
      toast.error('Error logging in: Invalid credentials'); // Error toast
    });
  };
  
  
  return (
    <>  
      <div className='login-cont'>
        <div className='login-page-container'>
          <div className="form-container">
            <div className='mylogo-container'>
            <img src={myLogo} className='mylogo'></img>
            </div>
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
