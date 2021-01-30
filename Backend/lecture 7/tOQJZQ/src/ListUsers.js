import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUsers, deleteUser, updateUser,  signup} from './store/actions/auth';
import { func } from 'prop-types';

export default function ListUsers(props) {

    let [users, setUsers] = useState([]);


    useEffect(() => {

        getUsers(function (resp) {

            setUsers(resp.data.users);

        });

    }, []);

    return <div>
        <button onClick={() => {

            let name =  prompt("Enter name");
            let city = prompt("Enter city")
            let password = prompt("Enter password")
            signup({
                name, city, password
            }, (resp)=>{

                setUsers([...users, resp])
            })


        }}>Add User</button>
        <table>
            {
                users.map((user, index) => {
                    return <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.password}</td>
                        <td>{user.city}</td>
                        <td><button onClick={function (evt) {

                            deleteUser(user._id, (resp) => {

                                users.splice(index, 1);
                                setUsers([...users]);

                            })

                        }}>DELETE</button></td>
                        <td><button onClick={function (evt) {

                            let newName = prompt("Enter name");

                            updateUser({
                                ...user,
                                name: newName
                            }, (resp) => {

                                user.name = newName;
                                setUsers([...users]);

                            });

                        }}>Edit</button></td>
                    </tr>
                })
            }
        </table>
    </div>

}

// export default connect((store) => {
//     return store;
// })(ListUsers);