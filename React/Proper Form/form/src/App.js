import React , {useState} from "react"
import Signup from "./components/signup/signup";
// import Displayrow from "./components/user/user";
import Header from "./components/header/header";
import {BrowserRouter,Route} from 'react-router-dom';
import Login from "./components/login/login";
import Dynamic from "./components/dynamic/dynamic";

export default function(){
  
  let [name , setName] = useState('');
  let [mail , setMail] = useState('');
  let [number , setNumber] = useState('');
  let [address, setAddress] = useState('');
  let [users , setUser] = useState([])
 
  let [val , setVal] = useState(1);
  function setValue(){
      setVal(0);
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
  function submit(event){
    event.preventDefault();
    setVal(0);
    let user = { name2 : name, mail2: mail, number2 : number , address2 : address};
    users.push(user);
  
    setUser([...users])
    localStorage.setItem('Userss',JSON.stringify(users))
    
  
  }
  function Home(){
    return <h1>This is Home Page</h1>
  }
  return <div>
    
    
    <BrowserRouter>
    <Header/>
    <Route exact path='/' component={Home}/>
    <Route path="/signup" render={() =>{
      return <Signup submit={ submit} setVal={setValue} display={val} name={ namee} mail={maill} number={numberr} address={addresss} user={users} remove={removeUser}/>
    }}/>
     <Route path="/signup"  component={Signup}/>
    <Route path="/login" render={() =>{
       return <Login userr={users}/>
    }}/>
    <Route path='/dynamic/:name/:email' component={Dynamic} />
    </BrowserRouter>
 
  </div>
}








// <br/>
// <button onClick ={setValue}>Add User</button>
// <br/>
// {
//   val > 0 ? <Displayform submit={ submit} name={ namee} mail={ maill} number={ numberr} address={  addresss}/> : null
// }
// {
//  users.length > 0 ? <table border = '1px'>
//    <tr><th>Name</th><th>Email</th><th>Contact Number</th><th>Address</th><th>Remove User</th></tr>
//    {
//        users.map((item,index) => {

//         return <Displayrow userName={item.name2} remove = {() =>{
//           removeUser(index)
//         }} userEmail={item.mail2} userNumber={item.number2} userAddress={item.address2}/>; ;

//     })
  
//    }</table> : null 
// }