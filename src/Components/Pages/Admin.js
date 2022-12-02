import React, { useState } from "react";
import "../../assets/css/Admin.css";
import Footer from "../Children/Footer";
import Header from "../Children/Header";

function Admin() {
  const [users] = useState([
    { id: 1, firstName: "User", lastName: "Name", email: "username@test.com" },
    {
      id: 2,
      firstName: "User1",
      lastName: "Name1",
      email: "username1@test.com",
    },
    {
      id: 3,
      firstName: "User2",
      lastName: "Name2",
      email: "username2@test.com",
    },
    {
      id: 4,
      firstName: "User3",
      lastName: "Name3",
      email: "username3@test.com",
    },
    {
      id: 5,
      firstName: "User4",
      lastName: "Name4",
      email: "username4@test.com",
    },
  ]);

  return (
    <div>
      <Header />
      <h3 className="usersList">User's table</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Footer/>
    </div>
  );
}
export default Admin;
