import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import store from './store/store';
import { func } from 'prop-types';

{/* <Chatbox /> */ }


export default class Login extends React.Component {


    updateValue = (evt) => {


        this.setState({
            [evt.target.id]: evt.target.value
        })

    }

    login = (evt) => {


        evt.preventDefault();

        Axios.post("/login", {
            name: this.state.userName,
            password: this.state.userPassword
        }).then((resp)=> {

            if (resp.data) {
                store.dispatch({

                    type:"USER_LOGIN",
                    user:resp.data
                });
            }else{
                alert("user not found");
            }

        })




    }


    render = () => {

        return <form onSubmit={this.login} action="">


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