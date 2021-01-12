import React from 'react';

export default function Section3() {
    return <div id="section3">
        <div id='contact-left'>
        <p id = 'txt' style={{ marginLeft : '29px'}}>Learn on the go</p>
        <p id="innertxt">Download lessons and learn
         anytime,<br/> anywhere with the SchoolX learning<br/> app</p>
         <div style={{display : 'flex', marginLeft : '35px'}}>
         <a target="blank" href="https://play.google.com/store/apps/details?id=org.schoolx.pk"><img src="./google.svg"/>
         </a> &nbsp;
         <a><img src="./appstore.svg" height="38"/></a>
         </div>
   
        </div>
        <div id = "contact-right">
            <img src='./mobile.png'/>
        </div>

        
        

     </div>
}