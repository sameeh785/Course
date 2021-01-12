import React , {useState} from "react";



export default function Displayrow(props){
 
    return    <tr>
        <td>{props.userName}</td>
        <td>{props.userEmail}</td>
        <td>{props.userNumber}</td>
        <td>{props.userAddress}</td>
        <td><button onClick = {props.remove}>Remove User</button></td>
    </tr>
   
   
   
  
}