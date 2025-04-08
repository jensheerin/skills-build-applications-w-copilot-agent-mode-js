import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://glorious-space-spork-x4j49jr7g9w2pg6w.github.dev-8000.app.github.dev/api/teams')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div>
      <h1 className="text-center text-primary">Teams</h1>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team.id}>
              <td>{team.id}</td>
              <td>{team.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Added Bootstrap buttons for team actions. */}
      <button className="btn btn-success me-2">Join Team</button>
      <button className="btn btn-danger">Leave Team</button>
    </div>
  );
}

export default Teams;
