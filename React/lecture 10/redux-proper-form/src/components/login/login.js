
import React , {useState} from "react";
import { connect } from "react-redux";

import {BrowserRouter,Link,Route} from 'react-router-dom';
import myStore from "../../store/store";
import  "./login.css";
function Login(props) {
  let [name , setName] = useState('');
  let [mail ,setMail] = useState('');
  function setName1(name) {
    setName(name)
    
  }
  function setMail1(mail) {
    setMail(mail)
    
  }
 

  
   
   return  <div class="container">
   <div class="row">
       <form class="col s12"  onSubmit={(e) =>{
          e.preventDefault()
          myStore.dispatch({
            history:props.history,
            type : 'Find-User',
            userName : name,
            userEmail : mail
          })
         
   
      }} id="reg-form">
         <div class="row">
           <div class="input-field col s12">
             <input id="first_name" type="text" class="validate" onChange = {
               (e) =>{
             
             setName1(e.target.value)
               } } required />
             <label for="first_name">Name</label>
           </div>
         </div>
         <div class="row">
           <div class="input-field col s12">
             <input id="email" type="email" class="validate" onChange = {
               (e) =>{
                  
   
               setMail1(e.target.value)
               }
           }  required />
             <label for="email">Email</label>
           </div>
         </div>
       
   
       
         
               <div class="row">
           <div class="input-field col s6">
             
             
           </div>
   
           <div class="input-field col s6">
             <button class="btn btn-large btn-register waves-effect waves-light" type="submit" name="action">Login
             
             </button>
           </div>
         </div>
       </form>
    
   
       </div>
      </div>
  
}

// function Login(props){
//     console.log(props.userr)
  
  


//     // function showResult() {
        
//     //     let User = props.users.user.find((item) =>{
//     //      if(item.name2 == name && item.mail2 == mail){
//     //        return item
//     //      }
//     //     })
      
//     //     if(User){
//     //         alert('Access guranted')
//     //     }
//     //     else{
//     //         alert('Access not guranted')
//     //     }
    
//     //     console.log(props.userr + 'sami')
//     //    let user1 =  props.userr.find((item) =>{
//     //         return item.name2 === name && item.email2 === mail
//     //     })
//     //     console.log(user1)
//     //     if(user1){
//     //         alert('User Exit')
//     //     }
//     //     else{
//     //         alert('User does not exit login')
//     //     }
        
//     // }
  
   
//  return <div>
//     <Show {...props} />
//    </div>
// }

export default connect((store) =>{
  return store ;
}) (Login)


// useEffect(() =>{
//     let User = props.user.find((item) =>{
//         if(item.name2 == props.match.params.name && item.mail2 == props.match.params.email){
//                 return item
//               }

//         });
//         console.log('heeeeeeeeeeeeey')
//      setUser(User);
// },[])







