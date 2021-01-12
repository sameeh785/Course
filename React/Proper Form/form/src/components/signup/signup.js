
import React , {useState} from "react";
import Displayform from "../form/form";
import Displayrow from "../user/user";
import Success from "../success/success";



import {BrowserRouter,Link,Route} from 'react-router-dom';

export default function Signup(props){
    
  
    return <div>
    <br/>
    {/* <button onClick ={props.setVal}>Add User</button> */}
    <br/>
    {
      props.display > 0 ? <Displayform submit1={ props.submit} setVal={props.setVal}  name1={ props.name} mail1={props. mail} number1={ props.number} address1={  props.address}/> : null
    }
    {
     props.display == 0 ? <Success/>
     : null
    }
   </div>
}








