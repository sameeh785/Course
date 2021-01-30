import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "./signup.css";
import store from "../store/store";

export default function Signup(props) {
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  function addUser(){
    let abc = {
      userName,
      email,
      password,
    }
    store.dispatch({
      type:"USER_BANRAH",
      data:abc
  })
  }


  function onChangeData(e) {
    switch (e.target.name) {
      case "name":
        setUserName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
    }
    // console.log(userName,email,password);
  }
   

  return (
    <div class="wrapper fadeInDown">
      <div id="formContent">
        {/* <!-- Tabs Titles --> */}

        {/* <!-- Icon --> */}
        <div class="fadeIn first">
          <h1>Sign Up</h1>
        </div>

        {/* <!-- Login Form --> */}
        <form>
          <input
            type="text"
            id="login"
            class="fadeIn second"
            name="name"
            placeholder="User Name"
            onChange={onChangeData}
          />
          <input
            type="text"
            id="login"
            class="fadeIn second"
            name="email"
            placeholder="Email"
            onChange={onChangeData}
          />
          <input
            type="password"
            id="password"
            class="fadeIn third"
            name="password"
            placeholder="password"
            onChange={onChangeData}
          />
          <button type="submit" className="fadeIn fourth" onClick={(e)=>{
            e.preventDefault();
            addUser();
          }}>
            <Link to="/">
            Sign Up
            </Link>
          </button>
          {/* <Link to="/">
          <input
          
            type="submit"
            class="fadeIn fourth"
            value="Sign Up"
            onClick={(e) => {
              e.preventDefault();
              props.addUser(userName,email,password);
            }}
          />
          </Link> */}
        </form>

        {/* <!-- Remind Passowrd --> */}
        <div id="formFooter">
          <a class="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
