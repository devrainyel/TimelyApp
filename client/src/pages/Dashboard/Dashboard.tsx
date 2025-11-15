import React from "react";

const Dashboard = ( { user, error } ) => {
  return (
    <div>
      {error && <p className='text-red-400 text-xs mt-2 italic'>{error}</p>}
      {user ? (
        <div>
          <h2>Welcome, {user.username}</h2>
          <p>{user.email}</p>
          </div> )
          : <div></div>
         }
    </div>
  )
};


export default Dashboard;
