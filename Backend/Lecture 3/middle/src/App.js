import React, { useState, useEffect } from 'react';

import { Provider, connect } from 'react-redux'
// import mStore from './store/store';

import history from './createHistory'
import { Route, Router } from 'react-router-dom';
import Signup from './signup';
import Login from './login';




function Dashboard(props) {

    return <h1>uiuiui{
        props.usersSection.currentUser.name
    }</h1>;

}

let NewDashboard = connect((store) => {
    return store;
})(Dashboard)

export default function () {

    return <div>
            <Router history={history}>
        <Provider store={mStore}>
        
               <Route path="/signup" component={Signup} />
               <Route path="/login" component={Login} />
               <Route path="/dashboard" component={NewDashboard} />
            
        </Provider>
            </Router>
    </div>

}
