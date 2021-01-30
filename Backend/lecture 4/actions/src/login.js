import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { login  } from './store/actions/auth';

{/* <Chatbox /> */ }


class Login extends React.Component {


    updateValue = (evt) => {


        this.setState({
            [evt.target.id]: evt.target.value
        })

    }

    login = (evt) => {


        evt.preventDefault();
        this.props.login({
            name: this.state.userName,
            password: this.state.userPassword,
        }, this.props.history)

        // Axios.post("/login", {
        //     name: this.state.userName,
        //     password: this.state.userPassword
        // }).then((resp)=> {

        //     if (resp.data) {
        //         store.dispatch({

        //             type:"USER_LOGIN",
        //             user:resp.data,
        //             history:this.props.history
        //         });
        //     }else{
        //         alert("user not found");
        //     }

        // })




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

export default connect((store) =>{
    return store
},{login})(Login)