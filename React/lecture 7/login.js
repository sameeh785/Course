import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import { store } from './store';

{/* <Chatbox /> */ }


export default class Login extends React.Component {


    updateValue = (evt) => {


        this.setState({
            [evt.target.id]: evt.target.value
        })

    }

    login = (evt) => {

        evt.preventDefault();

        this.props.onUserLogin(this.state);


    }


    render = () => {

        return <form onSubmit={this.login} action="">

            <Link to="/gc/student/admission">Dashboard</Link>
            <Link to="/gc/teacher/admission">Teacher</Link>

            <div>
                <input onChange={this.updateValue} id="userName" type="text" placeholder="Name" />
            </div>

            <div>
                <input onChange={this.updateValue} id="userPassword" type="text" placeholder="Password" />
            </div>

            <button >Login</button>
        </form>
    }

}