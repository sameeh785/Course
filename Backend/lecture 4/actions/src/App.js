import React, { useState, useEffect } from 'react';

import { Provider, connect } from 'react-redux'
import mStore from './store/store';


import { Route, BrowserRouter } from 'react-router-dom';
import Signup from './signup';
import Login from './login';




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
        
               <Route path="/signup" component={Signup} />
               <Route path="/login" component={Login} />
               <Route path="/dashboard" component={NewDashboard} />
            
        </Provider>
            </BrowserRouter>
    </div>

}
