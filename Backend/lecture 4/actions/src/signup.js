import React from 'react';
import { connect } from 'react-redux';

import { signup  } from './store/actions/auth';


 class Signup extends React.Component {

    signup = (evt) => {

        evt.preventDefault();
        let number1 =parseInt( Math.random() * 20);
        let formData = new FormData();
        formData.append("name",this.state.name);
        formData.append("password",this.state.userPassword);

        formData.append("userFile",this.state.userFile);
        formData.append("abc",number1);

        this.props.signup(formData, this.props.history)


        // axios.post('/signup',
        //     {
        //         name: this.state.name,
        //         pasword: this.state.userPassword
        //     }
        // ).then((resp) => {

        //     console.log(resp.data);
        //     this.props.history.push('/login')

        // })
         
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
                <input onChange={this.updateValue} id="userPassword" type="text" placeholder="Password" />
            </div>
            <div>
                <input onChange={this.updateValue} id="userFile" type="file" placeholder="Select a file" />
            </div>

            <button>Signup</button>
        </form>
    }

}

export default connect((store) =>{
    return store
},{signup})(Signup)