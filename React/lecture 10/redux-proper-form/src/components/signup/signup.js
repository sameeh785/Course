
import React , {useState} from "react";
import Displayform from "../form/form";
import Displayrow from "../user/user";
import Success from "../success/success";
import { connect } from 'react-redux';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import store from '../../store/store'

 function Signup(props){
    
  
    return <div>
    <br/>
    {/* <button onClick ={props.setVal}>Add User</button> */}
    <br/>
    {
      props.users.show > 0 ? <Displayform /> : null
    }
    {
      props.users.show  == 0 ? <Success/>
     : null
    }
   </div>
}

export default connect(function(store){
  return store;
})(Signup);



// submit1={ props.submit} setVal={props.setVal}  name1={ props.name} mail1={props. mail} number1={ props.number} address1={  props.address}






