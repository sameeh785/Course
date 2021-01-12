import React from 'react';
import './card.css';


export default function Card(props) {

    return <div class="col s12 m3">
        <div class="card">
            <div class="card-image" onClick={props.deleteAdd}>
                <img src="https://materializecss.com/images/sample-1.jpg" />
                <span class="card-title">{props.data.title + " - " + props.name}</span>
            </div>
            <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                <button onCLick = {props.olx}>asdasdasd</button>
            I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action" >
                {/* <a href="#" >Edit Add</a> */}
                <p> Edit Add</p>
            </div>
        </div>
    </div >


}