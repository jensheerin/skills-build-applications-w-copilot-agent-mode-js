import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://glorious-space-spork-x4j49jr7g9w2pg6w.github.dev-8000.app.github.dev/api/activities')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div>
      <h1 className="text-center text-primary">Activities</h1>
      <div className="row">
        {activities.map(activity => (
          <div className="col-md-4 mb-4" key={activity.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{activity.name}</h5>
                <p className="card-text">Activity ID: {activity.id}</p>
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
