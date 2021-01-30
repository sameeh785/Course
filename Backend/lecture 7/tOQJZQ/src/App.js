
// import Header from './components/header/header';
// import Section from './components/section/section';
import Signup from './signup';
import ListUsers from './ListUsers';
import { Route, BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import React, { useState } from 'react';
import store from './store/store';

function Process() {

    let [one, setOne] = useState(0);


    return <div>
        <input value={one} />
    </div>
}


export default function Calculator() {


    return <div>
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/list" component={ListUsers} />
                <Route path="/signup" component={Signup} />
                {/* <Route path="/login" component={Login} /> */}
            </BrowserRouter>
        </Provider>
    </div>

}
