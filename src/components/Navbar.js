import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();
  const Logout = async () => {

    try {
      await axios.delete('http://localhost:5000/logout')
      history.push('/');
    }
    catch (error) {
      console.log(error)
    }
  }
  
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      
      <div className="container">
      
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          TUTORIAL
        </a>
    
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href="/" className="navbar-item">
            Home
          </a>
    </div>
    
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button onClick={Logout} className="button is-light">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </nav>
    )
}

export default Navbar