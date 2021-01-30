import React ,{ useState, useEffect } from "react";
import { list,userDelete,userUpdate} from "./store/actions/auth";
import { connect } from "react-redux";
function Display(props){
    useEffect(() =>{
       props.list()
    },[])
  return <table>
      
     {
          props.usersSection.users.map((item,index) => {
            return <tr><td>{item.name}</td><td>{item.password}</td><td><button onClick = {() =>{
            props.userDelete(item._id,index)
            }}>Delete</button></td><td><button onClick={() =>{
               let newName = prompt('Enter user Name');
               let newPassword = prompt('Enter user Password');
               props.userUpdate(index,{
                  name : newName,
                  password : newPassword,
                  idNo : item._id

               })



            }}>Edit</button></td><td>aaaa{item.fullName}</td></tr>
         })
     }
  </table>
}

export default connect((store) =>{
      return store
},{list,userDelete,userUpdate})(Display)