import React from "react";
import { Link } from "react-router-dom";

function Login() {

  const style = {
    marginTop: '5px',
  }
  return (
    <div className="Login">
      <form>
        <label for="username">Username:</label>
        <input type="text" name="username" />
        <div>
          {" "}
          <label for="password1">Password:</label>
          <input type="password" name="password1" style={style} />
        </div>
        <div>
          <button type="submit">Login</button>
          <div>
            <small>
              forgot password? click <a href="#">here</a>
            </small>
          </div>
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

export default Login;
