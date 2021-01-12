import React , {useState} from "react";


export default function Displayrow(props){
return <div> 
   
   <form  onSubmit = {(e) =>{
            
            props.submit1(e)
        }}>
        <label for="fname"  >Name :</label>
        <br/>
        <input type="text" id="fname" name="name1" onChange={ (evt) =>{
            props.name1(evt.target.value)

        }}/>
        <br/>
        <label for="mail">Email :</label>
        <br/>
        <input type="email" id="mail" name="email" onChange={ (evt) =>{
            props.mail1(evt.target.value)

        }}/>
        <br/>
        <label for="nbr">Mobile Number:</label>
        <br/>
        <input type="tel" id="nbr" name="phone" onChange={ (evt) =>{
            props.number1(evt.target.value)

        }}/>
        <br/>
        <label for="address">Address:</label>
        <br/>
        <input type="text" id="address" name="phone" onChange={ (evt) =>{
            props.address1(evt.target.value)

        }}/>
        <br/>
        <br/>
        <input type="submit" name="submit" value="Add"/>



    </form>
    <br/>
    
   
  </div>
}