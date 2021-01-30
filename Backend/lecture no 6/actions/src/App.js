import React, { useState, useEffect } from 'react';

import { Provider, connect } from 'react-redux'
import mStore from './store/store';


import { Route, BrowserRouter ,Link} from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import Display from './display';

function Header(){

    return <nav class="#9c27b0 purple">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li ><a href="sass.html"><Link to="/login">Login</Link></a></li>
        <li><a href="badges.html"><Link to="/signup"> Signup</Link></a></li>
        <li><a href="collapsible.html"><Link to="/getuser">Dashboard</Link></a></li>
      </ul>
    </div>
  </nav>

}


function Dashboard(props) {

    return <h1>{
        props.usersSection.currentUser.name
    }</h1>;

}

let NewDashboard = connect((store) => {
    return store;
})(Dashboard)

export default function () {

    return <div>
        <h1>Chaloooooooooo</h1>
            <BrowserRouter>
        <Provider store={mStore}>
              
                <Header/>
               <Route path="/signup" component={Signup} />
               <Route path="/login" component={Login} />
               <Route path="/dashboard" component={NewDashboard} />
               <Route path="/getuser" component={Display} />

            
        </Provider>
            </BrowserRouter>
    </div>

}
