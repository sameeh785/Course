import React, { useState, useEffect } from 'react';

import { Provider, connect } from 'react-redux'
import mStore from './store/store';

import { Route, BrowserRouter } from 'react-router-dom';
import Signup from './signup';
import Login from './login';

function UserForm() {

    return <div>
        <div>
            <input id="myName" type="text" />
            <button onClick={() => {

                mStore.dispatch({
                    type: "USER_ADDING",
                    name: document.getElementById('myName').value
                });

            }}>Add Text</button>
        </div>

    </div>

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
        <Provider store={mStore}>
        
            <BrowserRouter>
               <Route path="/signup" component={Signup} />
               <Route path="/login" component={Login} />
               <Route path="/dashboard" component={NewDashboard} />
            
            </BrowserRouter>
        </Provider>
    </div>

}