
import React , {useState} from "react";
import {BrowserRouter,Link,Route} from 'react-router-dom';

import './header.css'
export default function Header(){
    return   <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Dashboard</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to='/signup'>Sign UP</Link></li>
        <li><Link to='/login'>Log In</Link></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
}