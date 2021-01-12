import React , {useState} from "react";

import Displayform from "./components/form/form";
import Displayrow from "./components/user/user";
import {BrowserRouter} from 'react-router-dom';

export default function(){
  let [val , setVal] = useState(0);
  let [name , setName] = useState('');
  let [mail , setMail] = useState('');
  let [number , setNumber] = useState('');
  let [address, setAddress] = useState('');
  let [users , setUser] = useState([])
  function setValue(){
    setVal(1);
  }

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

  function removeUser(index) {
    users.splice(index,1);
    setUser([...users])

    
  }
  function submit(){
    setVal(0);
   // let newUser = [];
    let user = { name2 : name, mail2: mail, number2 : number , address2 : address};
    users.push(user);
    console.log(users)
    setUser([...users])
  
  }
  return <div>
    <button onClick ={setValue}>Add User</button>

    <br/>
    <br/>
    {
      val > 0 ? <Displayform submit={ submit} name={ namee} mail={ maill} number={ numberr} address={  addresss}/> : null
    }
   {
     users.length > 0 ? <table border = '1px'>
       <tr><th>Name</th><th>Email</th><th>Contact Number</th><th>Address</th><th>Remove User</th></tr>
       {
           users.map((item,index) => {

            return <Displayrow userName={item.name2} remove = {() =>{
              removeUser(index)
            }} userEmail={item.mail2} userNumber={item.number2} userAddress={item.address2}/>; ;

        })
      
       }</table> : null 
   }
  </div>
}


