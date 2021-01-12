import React from 'react';
import axios from 'axios';
import {store} from './store';

export default class Signup extends React.Component {

    signup = (evt) => {

        evt.preventDefault();
      
        console.log(this.state);

        this.props.onUserAdded(this.state);

    }

    updateValue = (evt)=>{


        this.setState({
            [evt.target.id]:evt.target.value
        })

    }

    render = () => {

        return <form  onSubmit={this.signup} action="">
            <div>
                <input onChange={this.updateValue} id="userName" type="text" placeholder="Name" />
            </div>
            <div>
                <input onChange={this.updateValue} id="userPassword" type="text" placeholder="Password" />
            </div>

            <button>Signup</button>
        </form>
    }

}