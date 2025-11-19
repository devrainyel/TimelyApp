import DashboardNavbar from '../../components/layout/DashboardNavbar';
import Sidebar from '../../components/layout/Sidebar';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Loading from '../../components/ui/Loading';
// import Feed from '../Feed';
import { Outlet } from 'react-router-dom';

const Dashboard = ({ user, error, setUser }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return user ? (
    <>
      <DashboardNavbar user={user} setUser={setUser} error={error} />
      <section className='w-full flex'>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className='flex-1'>
          <Outlet />
        </div>
        {sidebarOpen ? (
          <button
            onClick={() => setSidebarOpen(false)}
            className='sm:hidden absolute top-4 right-4 z-50 p-2 bg-[#0E0E0E] rounded-md text-white hover:bg-[#1b1b1b] transition-colors duration-200'
          >
            <X size={24} />
          </button>
        ) : (
          <button
            onClick={() => setSidebarOpen(true)}
            className='sm:hidden absolute top-4 right-4 z-50 p-2 bg-[#0E0E0E] rounded-md text-white hover:bg-[#1b1b1b] transition-colors duration-200'
          >
            <Menu size={24} />
          </button>
        )}
      </section>
    </>
  ) : <Loading />
};

export default Dashboard;
