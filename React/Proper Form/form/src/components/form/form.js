import React , {useState} from "react";
import  "./signup.css";
export default function Displayrow(props){
return <div> 

<div class="container1">
<div class="row">
    <form class="col s12" onSubmit = {(e) =>{
            
            props.submit1(e)
        }} id="reg-form">
      <div class="row">
        <div class="input-field col s12">
          <input id="first_name" type="text" class="validate" onChange={ (evt) =>{
            props.name1(evt.target.value)

        }}  required />
          <label for="first_name">First Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"  onChange={ (evt) =>{
            props.mail1(evt.target.value)

        }}  required />
          <label for="email">Email</label>
        </div>
      </div>
    

      <div class="row">
        <div class="input-field col s12">
          <input id="Number" type="tel" class="validate"   onChange={ (evt) =>{
            props.number1(evt.target.value)

        }}  required />
          <label for="Number">Contact No</label>
        </div>
      </div>
      

      <div class="row">
        <div class="input-field col s12">
          <input id="address" type="text" class="validate"  onChange={ (evt) =>{
            props.address1(evt.target.value)

        }}   required />
          <label for="address">Address</label>
        </div>
      </div>
      
            <div class="row">
        <div class="input-field col s6">
          
          
        </div>

        <div class="input-field col s6">
          <button class="btn btn-large btn-register waves-effect waves-light" type="submit" name="action">Register
          
          </button>
        </div>
      </div>
    </form>
 

    </div>
   </div>
  </div>
}
