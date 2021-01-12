
import React , {useState} from "react";
import Displayform from "../form/form";
import Displayrow from "../user/user";

import {BrowserRouter,Link,Route} from 'react-router-dom';

export default function Signup(props){
    
  
    return <div>
    <br/>
    <button onClick ={props.setVal}>Add User</button>
    <br/>
    {
      props.display > 0 ? <Displayform submit1={ props.submit} setVal={props.setVal}  name1={ props.name} mail1={props. mail} number1={ props.number} address1={  props.address}/> : null
    }
    {
     props.user.length > 0 ? <table border='1px'><tr><th>Name</th><th>Email</th><th>Contact Number</th><th>Address</th><th>Remove User</th></tr>
       {
           props.user.map((item,index) =>{
               return <Displayrow userName={item.name2} removee={() =>{
                   props.remove(index)
               }} userEmail={item.mail2} userNumber={item.number2} userAddress={item.address2}/>
           })
          
       }
      </table> : null
    }
   </div>
}


