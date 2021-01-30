
import React from 'react';
import './shapeContainer.css';


export default class ShapeContainer extends React.Component {


    render() {

        return <div className="shapeContainer">
                <h1>{this.props.name}</h1>
                {this.props.children}
        </div>

    }


}