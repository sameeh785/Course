import React from 'react';
import './card.css';


export default function Card(props) {

    return <div class="col s12 m3">
        <div class="card">
            <div class="card-image">
                <img src="https://materializecss.com/images/sample-1.jpg" />
                <span class="card-title">{props.city + " - " + props.name}</span>
            </div>
            <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
                <a href="#">This is a link</a>
            </div>
        </div>
    </div >


}