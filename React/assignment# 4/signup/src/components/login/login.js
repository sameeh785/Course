
import React , {useState} from "react";

import {BrowserRouter,Link,Route} from 'react-router-dom';

export default function Login(props){
    console.log(props.userr)
    let [name , setName] = useState('');
    let [mail ,setMail] = useState('')

    function showResult() {
        console.log(props.userr)
        // let = user1
        let User = props.userr.find((item) =>{
         if(item.name2 == name && item.mail2 == mail){
           return item
         }
        })
      
        if(User){
            alert('Access guranted')
        }
        else{
            alert('Access not guranted')
        }
    //     console.log(props.userr + 'sami')
    //    let user1 =  props.userr.find((item) =>{
    //         return item.name2 === name && item.email2 === mail
    //     })
    //     console.log(user1)
    //     if(user1){
    //         alert('User Exit')
    //     }
    //     else{
    //         alert('User does not exit login')
    //     }
        
    }

   
 return <div>
   <form onSubmit={(e) =>{
       e.preventDefault()
       showResult()

   }}>
   <label for="fname"  >Name :</label>
        <br/>
        <input type="text" id="fname" name="name1" onChange = {
            (e) =>{
                console.log(e.target.value)
            setName(e.target.value)
            }
        } />
        <br/>
        <label for="mail" >Email :</label>
        <br/>
        <input type="email" id="mail" onChange = {
            (e) =>{
                console.log(e.target.value)

            setMail(e.target.value)
            }
        } name="email"/>
        <input type="submit" name="submit" value="Submit"/>
        
   </form>
   </div>
}



// useEffect(() =>{
//     let User = props.user.find((item) =>{
//         if(item.name2 == props.match.params.name && item.mail2 == props.match.params.email){
//                 return item
//               }

//         });
//         console.log('heeeeeeeeeeeeey')
//      setUser(User);
// },[])
