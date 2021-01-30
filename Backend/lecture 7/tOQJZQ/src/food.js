
import React from 'react';

export function SpecialComponent(){

    function sayHello(){
        alert("Say hello1");
    }

    let label = "Click this button";

    return <button onClick={sayHello} style={{backgroundColor:"blue",width:"150px", color:'white'}}>{label}</button>

}