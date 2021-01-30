import React from "react";
import {connect} from "react-redux"

function Home(props) {
  return (
    <div className="container">
      <table className="table table-bordered table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {props.userSection.users.map((user) => {
            return (
              <tr>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default connect((store)=>{
    return store;
})(Home)



