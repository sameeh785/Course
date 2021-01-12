import React from 'react';

export default function Feader() {
    return <footer className= 'head'>
     
       <ul id='left-footer'>
    
         <li style = {{ borderRight: '2px solid', paddingRight : '10px'}}>© 2020 SCHOOLX</li>
         <li className='item'>Contact US</li>
         <li className='item'>About Us</li>
         <li className='item'>Term Of Policy</li>
         <li className='item'>Privacy Policy</li>
       </ul>
       <ol>
       <li><i class="fa fa-facebook-f" style={{fontSize : '24px', color : 'white'}}></i></li> 
       <li><i class="fa fa-instagram" style={{fontSize : '24px', color : 'white'}}></i></li> 
       <li><i class="fa fa-linkedin" style={{fontSize : '24px', color : 'white'}}></i></li> 
      </ol>
         
    </footer>
}