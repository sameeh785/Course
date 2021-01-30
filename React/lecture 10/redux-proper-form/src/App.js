import React , {useState} from "react"
import Signup from "./components/signup/signup";
// import Displayrow from "./components/user/user";
import Header from "./components/header/header";
import {BrowserRouter,Route} from 'react-router-dom';
import Login from "./components/login/login";
import Dynamic from "./components/dynamic/dynamic";
import Dashboard from "./components/dashboard/dashboard";
import {Provider} from 'react-redux';
import mystore from './store/store';
function Home(){
  return <h1>This is Home Page</h1>
}
export default function(){
  
 
  return <div>
    
    <Provider store={mystore}>
    <BrowserRouter>
    <Header/>
    <Route exact path='/' component={Home}/>
    <Route path="/signup" />
    <Route path="/signup"  component={Signup}/>
    <Route path="/login"component={Login}/>
    <Route path = '/dashboard/:id' component = {Dashboard}/>
    {/* <Route path='/dynamic/:name/:email' render ={(props) =>{
         return <Dynamic user={users} {...props} Naaa = "samooo" />
    }} /> */}
    </BrowserRouter>
    </Provider>
  </div>
}


















{/* <div>
    
    
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
    <Route path='/dynamic/:name/:email' render ={(props) =>{
         return <Dynamic user={users} {...props} Naaa = "samooo" />
    }} />
    </BrowserRouter>
 
  </div> */}

























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



