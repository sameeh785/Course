import React from "react";
import {Link} from 'react-router-dom';

import'./header.css';

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container">
        <Link className="navbar-brand" to="/">Navbar</Link>
        
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li class="nav-item">
               <Link to="./login" className="nav-link">Login</Link>
              </li>
              <li class="nav-item">
              <Link to="./signup" className="nav-link">Sign Up</Link>
              </li>
             
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
  );
}
