import DashboardNavbar from "../../components/layout/DashboardNavbar";

const Dashboard = ( { user, error, setUser } ) => {
  return (
    <>
    <DashboardNavbar user={user} setUser={setUser} error={error} />
    <section>
      {error && <p className='text-red-400 text-xs mt-2 italic'>{error}</p>}
      {user ? (
        <div className="max-w-7xl flex lg:mx-auto px-6">
          <h2>Welcome, {user.username}</h2>
          <p>{user.email}</p>
          </div> )
          : <div></div>
         }
    </section>
    </>
  )
};

export default Dashboard;
