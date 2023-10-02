import React from "react";
import { useLocation, Link } from "react-router-dom";

function List({ userDetails }) {
  const location = useLocation();

  return (
    <div>
      <div>
        <h1>This page contains user details</h1>
        <ul>
          <li>
            <Link to="/registration">Home</Link>
          </li>
        </ul>
        <table border={5} width="50%" cellPadding={20}>
        <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {userDetails.map((info, ind) => (
              <tr key={ind}>
                <td>{info.name}</td>
                <td>{info.email}</td>
                <td>{info.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
