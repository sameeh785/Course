// import React, { useState } from 'react';
// import Name from "./compoennts/displayName/name";

// import { BrowserRouter , Link, Route} from "react-router-dom";

// export default function router(){
//   return <BrowserRouter>
//   <Route path='/login' render={() =>{
//      return <login name='sami'/>
//   }}/>
//   </BrowserRouter>
// }

import React, { useState, useEffect } from 'react';
import AddUserForm from './usrr';

function UserList(props) {

    return <>

        {props.users.map((user) => {

            return <tr>
                <td>{user.name}</td>
                <td>{user.city}</td>
                <td>{user.email}</td>
            </tr>

        })}
    </>

}



export default function App() {

    let [formShow, setFormShow] = useState(false);
    let [users, setUsers] = useState([]);


    useEffect(function () {

        let lsUsers = JSON.parse(localStorage.getItem("cData") || "[]")
        setUsers(lsUsers);


    }, []);


    function onDataAdded(data) {

        users.push(data);

        setUsers([...users])
        setFormShow(false);


        localStorage.setItem("cData", JSON.stringify(users));


    }

    return <div>


        {!formShow ? <button onClick={() => {
            setFormShow(true);

        }}>Open User Form</button> : null}

        {formShow ? <AddUserForm onDataAdded={onDataAdded} /> : null}

        <table border="1">
            <UserList users={users} />
        </table>

    </div>

}