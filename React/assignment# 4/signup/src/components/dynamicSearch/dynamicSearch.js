import React , {useState} from "react";



export default function Displayrow(props){
 
    return    <tr>
        <td>{props.Name}</td>
        <td>{props.Email}</td>
        <td>{props.Number}</td>
        <td>{props.Address}</td>
    </tr>
   
   
   
  
}