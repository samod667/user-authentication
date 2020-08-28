import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import app from '../firebase/config'

function Signup() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (usr, mail, pass1, pass2) => {
      app.auth()
        .createUserWithEmailAndPassword(mail, pass1)
          .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]
        });
  }

    return (
      <div className="Signup">
        <h3>Signup!</h3>
        <form onSubmit={() => handleSubmit(username, email, password, confirmPassword)}>
          <label for="username">Username:</label>
          <input type="text" name="username" onChange={(e) => (setUsername(e.target.value))}/>
          <div>
            <label for="email">Email:</label>
            <input type="email" name="email" onChange={(e) => (setEmail(e.target.value))}/>
          </div>
          <div>
            <label for="password1">Password:</label>
            <input type="password1" name="password1" onChange={(e) => (setPassword(e.target.value))}/>
          </div>
          <div>
            <label for="password2">Confirm Password:</label>
            <input type="password2" name="password2" onChange={(e) => (setConfirmPassword(e.target.value))}/>
          </div>
          <div>
            <button type="submit">Signup!</button>
            <div>
              <Link to="/">
                <button type="button">Back</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
}

export default Signup
