import React , {useState} from "react";
import  "./signup.css";
import store from "../../store/store";
import mystore from '../../store/store'
export default function Displayrow(props){



  let [name , setName] = useState('');
  let [mail , setMail] = useState('');
  let [number , setNumber] = useState('');
  let [address, setAddress] = useState('');
  function namee(name1){
    setName(name1);
  }

  function maill(mail1){
    setMail(mail1);
  }

  function numberr(number1){
    setNumber(number1);
  }

  function addresss(address1){
    setAddress(address1);
  }
  function submit1(event){
    event.preventDefault();
    let user = { name2 : name, mail2: mail, number2 : number , address2 : address};
    mystore.dispatch({
      type : "User-Add",
      user : user,
      display : 0
    })
    
  
  }
return <div> 

<div class="container1">
<div class="row">
    <form class="col s12" onSubmit = {(e) =>{
            
            submit1(e)
        }} id="reg-form">
      <div class="row">
        <div class="input-field col s12">
          <input id="first_name" type="text" class="validate" onChange={ (evt) =>{
            namee(evt.target.value)

        }}  required />
          <label for="first_name">First Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"  onChange={ (evt) =>{
           maill(evt.target.value)

        }}  required />
          <label for="email">Email</label>
        </div>
      </div>
    

      <div class="row">
        <div class="input-field col s12">
          <input id="Number" type="tel" class="validate"   onChange={ (evt) =>{
            numberr(evt.target.value)

        }}  required />
          <label for="Number">Contact No</label>
        </div>
      </div>
      

      <div class="row">
        <div class="input-field col s12">
          <input id="address" type="text" class="validate"  onChange={ (evt) =>{
            addresss(evt.target.value)

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
