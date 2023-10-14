import React, { useState, useEffect } from 'react';

const T4 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the remote source
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.users)); // Extract 'users' array from the response
  }, []);

  return (
    <div style={{ textAlign: 'center' }} className='c1'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>User Name</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td><img src={user.image} alt = "Profile" width="50" height="50"/></td>
              <td>{user.firstName} </td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default T4;