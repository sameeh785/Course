


import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './login';
import Signup from './signup';


import Header from './header';


function Result(props) {

    return <div>
        <h1>{props.match.params.province}</h1>
        <h1>{props.match.params.roll}</h1>
        <h1>THis is home component</h1>
    </div>

}

export default function () {

    let [users, setUsers] = useState([]);


    function onUserLogin(data) {

        let targetUser = users.find((user) => {

            return user.name == data.name && user.password == data.password;

        })

        if (targetUser) {
            alert("userfound");
        } else {
            alert("nahi mila");
        }

    }

    function onUserAdded(user) {

        users.push(user)
        setUsers([...users]);

    }

    return <div>
        <BrowserRouter>
            <Header />  

            <Route path="/result/:province/:roll" component={Result} />
  

            {/* <Signup onUserAdded={onUserAdded} /> */}

            <Route path="/signup" render={() => {

                return <Signup onUserAdded={onUserAdded} />

            }} />

            <Route path="/login" render ={()=>{

                return <Login onUserLogin={onUserLogin} />

            }}/>

       


        </BrowserRouter>

    </div>

}