import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <h3>Hello Guest</h3>
      <p>
        Please
        <span>
          <Link to="/login"> login</Link>.
        </span>
        <p>Don't have an account?</p>
        <span>
          <Link to="/signup">Sign up here!</Link>
        </span>
      </p>
    </div>
  );
}

export default Home;
