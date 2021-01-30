import React from 'react';
import { connect } from 'react-redux';

// import store from './store/store';
import { signup as sn } from './store/actions/auth';

class Signup extends React.Component {


    signup = (evt) => {

        // this.props.history.push('/login')

        evt.preventDefault();

        this.props.sn({
            name: this.state.name,
            password: this.state.userPassword,
        }, this.props.history)


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

export default connect((store) => {
    return store
}, { sn })(Signup)