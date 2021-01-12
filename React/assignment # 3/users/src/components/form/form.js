import React , {useState} from "react";



export default function Displayrow(props){
return <div> 
   
   <form >
        <label for="fname"  >Name :</label>
        <br/>
        <input type="text" id="fname" name="name1" onChange={ (evt) =>{
            props.name(evt.target.value)

        }}/>
        <br/>
        <label for="mail">Email :</label>
        <br/>
        <input type="email" id="mail" name="email" onChange={ (evt) =>{
            props.mail(evt.target.value)

        }}/>
        <br/>
        <label for="nbr">Mobile Number:</label>
        <br/>
        <input type="tel" id="nbr" name="phone" onChange={ (evt) =>{
            props.number(evt.target.value)

        }}/>
        <br/>
        <label for="address">Address:</label>
        <br/>
        <input type="text" id="address" name="phone" onChange={ (evt) =>{
            props.address(evt.target.value)

        }}/>
        <br/>
        <br/>
        <input type="submit" name="submit" value="Add" onClick = {(e) =>{
            props.submit()
        }}/>



    </form>
    <br/>
    
   
  </div>
}