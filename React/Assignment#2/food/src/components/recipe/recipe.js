import React,{useState} from 'react';

 export default function Recipe(props){
     let [vaue,setValue]=useState('');
     return <tr style={{backgroundColor:props.color}}>
         <td>{props.name}</td>
         <td>{props.price}</td>
         <td><input  onChange = {props.Quantity } type="number" value = {props.quantity}/></td>
         <td><input class="dish" type="checkbox" checked ={props.status} onChange = {props.statusChecked} /></td>

     </tr>

}