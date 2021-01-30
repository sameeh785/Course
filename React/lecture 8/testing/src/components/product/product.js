import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

function Product(props) {

    return <div>
        Thsi is child component
        <h1>{props.productsSection.name} </h1>
        <ol>
            {
                props.usersSection.map((user)=>{

                    return <li>{user.name}</li>

                })
            }
        </ol>
    </div>

}

export default connect(function(store){
    return store;
})(Product);

// function connect(a, b) {

//     return function () {

//         return a + b;

//     }

// }

// let fin =  connect(4, 5)()


