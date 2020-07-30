import React from 'react'
import firebaseConfig from '../firebase/config'

function Home() {
    return (
      <div className="App">
        <h1>Home</h1>
        <button onClick={() => firebaseConfig.auth().signOut()}>
          Sign Out
        </button>
      </div>
    );
}

export default Home
