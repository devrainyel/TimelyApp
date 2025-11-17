import { House, Users, Camera, MessagesSquare, CirclePlus } from 'lucide-react';
import { useState } from 'react';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const sidebarLinks = [
    { label: 'Feed', icon: <House /> },
    { label: 'Connections', icon: <Users /> },
    { label: 'Moments', icon: <Camera /> },
    { label: 'Messages', icon: <MessagesSquare /> },
  ];

  const socialStats = [
    { label: 'Followers', count: 46 },
    { label: 'Following', count: 25 },
    { label: 'Moments', count: 2 },
  ];

  return (
    <div
      className={`px-10 flex flex-col items-center space-y-5
        max-sm:fixed max-sm:left-0 max-sm:top-16 max-sm:h-[calc(100vh-4rem)] max-sm:bg-[#0A0A0A] max-sm:z-40 max-sm:shadow-2xl max-sm:overflow-y-auto
        ${sidebarOpen ? 'translate-x-0' : 'max-sm:-translate-x-full'} 
        transition-all duration-300 ease-in-out`}
    >
      <div className='flex flex-col items-center mt-10'>
        <img
          src='./profile-picture.jpg'
          className='object-cover w-23 h-23 rounded-full border border-gray-500 p-1'
        />
        <h1 className='text-white text-2xl'>Jennifer Lawrence</h1>
        <p className='text-xs'>@johndoe27</p>
      </div>
      <div className='flex justify-center space-x-5 w-62 p-3 rounded-md'>
        {socialStats.map(({ label, count }) => (
          <div key={label}>
            <h1 className='text-white text-center font-black'>{count}</h1>
            <p className='text-xs'>{label}</p>
          </div>
        ))}
      </div>
      <div className='space-x-5 w-62 bg-[#0E0E0E] p-3 rounded-md'>
        <ul className='space-y-3'>
          {sidebarLinks.map(({ label, icon }) => (
            <li
              key={label}
              className='hover:bg-[#1b1b1b] cursor-pointer rounded-md'
            >
              <a className='flex items-center space-x-2 py-5 pl-2'>
                {icon}
                <p className='text-sm'>{label}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <button className='flex items-center bg-accent hover:bg-[#ff4b4e] text-sm py-2 px-3 mt-5 rounded-md'>
        <CirclePlus size={20} className='mr-2' />
        Create a Moment
      </button>
    </div>
  );
};

export default Sidebar;
