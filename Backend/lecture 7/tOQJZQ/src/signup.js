import React from 'react';
import { connect } from 'react-redux';

// import store from './store/store';
import { signup as sn } from './store/actions/auth';

class Signup extends React.Component {


    signup = (evt) => {

        // this.props.history.push('/login')

        evt.preventDefault();

        // let formData = new FormData()
        // formData.append('userID', Math.random() * 500);
        // formData.append('name', this.state.name);
        // formData.append('password', this.state.password);
        // formData.append('roll', this.state.roll);
        // formData.append('userFile', this.state.userFile);

        this.props.sn(this.state, this.props.history)


    }

    updateValue = (evt) => {


        this.setState({
            [evt.target.id]: evt.target.files ? evt.target.files[0] : evt.target.value
        })

    }

    render = () => {

        return <form onSubmit={this.signup} action="">
            <div>
                <input onChange={this.updateValue} id="name" type="text" placeholder="Name" />
            </div>
            <div>
                <input onChange={this.updateValue} id="password" type="text" placeholder="Password" />
            </div>
            <div>
                <input onChange={this.updateValue} id="roll" type="number" placeholder="Password" />
            </div>

            <button>Signup</button>
        </form>
    }

}

export default connect((store) => {
    return store
}, { sn })(Signup)