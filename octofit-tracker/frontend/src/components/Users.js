import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://glorious-space-spork-x4j49jr7g9w2pg6w.github.dev-8000.app.github.dev/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1 className="text-center text-primary">Users</h1>
      <form className="d-flex mb-4">
        <input className="form-control me-2" type="search" placeholder="Search Users" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
