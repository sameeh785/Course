import React from 'react';

export default function Section2() {
    return <div id="section2">
        <div id='card1'>
        <img src='./item1.svg'/>
        <h2>Daily live classes</h2>
        <div style ={{lineHeight : '100%'}} >Chat with educators, ask questions, answer live polls, and get your doubts cleared -
         all while the class is going on</div>
        <br/>
        </div>
        <div id='card2'>
        <img src='./irem2.svg'/>
        <h2>Practice and revise</h2>
        <div style ={{lineHeight : '100%'}} >Learning isn't just limited to classes with our practice section, mock tests and 
        lecture notes shared as PDFs for your revision</div>
        </div>
        <div id='card3'>
        <img src='./item3.svg'/>
        <h2>Learn anytime,<br/>anywhere</h2>
        <div style ={{lineHeight : '100%'}} >One subscription gets you access to all our live and recorded classes to
          watch from the comfort of any of your devices</div>
        <br/>
        </div>

    </div>
}