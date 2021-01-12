import React from 'react';
import './header.css'
export default function Header() {
    return <header className= 'head'>
      <div id= 'logo'> <img  src='./logo.png'/></div>
       <ul id='head'>
       <li>1-on-1 Class</li> 
       <li >Register</li> 
       <li>Login</li> 
      </ul>
         
    </header>
}