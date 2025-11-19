import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/layout/DashboardNavbar";
import Sidebar from "../components/layout/Sidebar";
import Loading from "../components/ui/Loading";

const Layout = ({ user, setUser, error }) => {
  return user ? (
    <>
      <DashboardNavbar user={user} setUser={setUser} error={error} />
      <section className="w-full flex min-h-screen">
        <Sidebar />
        <div className="flex-1 min-w-0"><Outlet /></div>
      </section>
    </>
  ) : <Loading />
}

export default Layout;