import React,{useState,useEffect} from "react";
import Display from "../dynamicSearch/dynamicSearch";

export default function Dynamic(props) {
     let [user , setUser] = useState(undefined);
    useEffect(() =>{
        let User = exit.find((item) =>{
            if(item.name2 == props.match.params.name && item.mail2 == props.match.params.email){
                    return item
                  }
    
            });
            setUser(User)
    },[])
   
    let exit = JSON.parse( localStorage.getItem('Userss'));
    return <div>
        {
            user ? <table border= "2px">
                <tr><th>Name</th><th>Email</th><th>Contact Number</th><th>Address</th></tr>
                <Display Name = {user.name2} Email = {user.mail2} Number={user.number2} Address = {user.address2}/>
            </table>: null
        }
       
    </div>
}