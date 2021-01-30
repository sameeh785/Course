import React from 'react';
import axios from 'axios';
import store from './store/store';

export default class Signup extends React.Component {

    signup = (evt) => {

        evt.preventDefault();

        axios.post('/signup',
            {
                name: this.state.name,
                pasword: this.state.userPassword
            }
        ).then((resp) => {

            console.log(resp.data);
            this.props.history.push('/login')

        })
         
    }
    updateValue = (evt) => {


        this.setState({
            [evt.target.id]: evt.target.value
        })

    }


    render = () => {

        return <form onSubmit={this.signup} action="">
            <div>
                <input onChange={this.updateValue} id="name" type="text" placeholder="Name" />
            </div>
            <div>
                <input onChange={this.updateValue} id="userPassword" type="text" placeholder="Password" />
            </div>

            <button>Signup</button>
        </form>
    }

}