import React from 'react';
import Axios from 'axios';
import {store} from './store';

{/* <Chatbox /> */ }


export default class Login extends React.Component {

    updateValue = (evt) => {


        this.setState({
            [evt.target.id]: evt.target.value
        })

    }

    login = (evt) => {

        evt.preventDefault();

        // store.dispatch({
        //     type: "USER_LOGIN",
        //     data: this.state,
        //     ctx:this
        // });


        Axios.post('/login', this.state).then((resp)=>{

            if(resp.data){
                alert("User logged in")
                this.props.history.push('/dashboard');
            }else{
                alert("User not found");
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