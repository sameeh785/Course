import React from 'react';

import './post.css';

// function say(){
//     alert("asdad");
// }

export class Post extends React.Component {

    name = "Gamica"

    createPost = () => {


        alert("this is create post function " + this.name)

    }

    deletePost = () => {


    }

    render = () => {

        // this.createPost();


        return <h1 className="Post-Comp">
            <button onClick={this.createPost}>This is soem ode</button>
            This is a post component
    </h1>
    }

}