import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const DashboardNavbar = ({ user, setUser, error }) => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const navigate = useNavigate();

  const handleShowSearch = () => {
    setSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setSearchOpen(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate('/');
  };

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <header>
      <nav className=''>
        <div className='flex items-center'>
          <Link to='./' className='logo'>
            Timely
          </Link>
          <div className='relative hidden sm:flex'>
            <Search
              className='absolute left-8 top-1/2 -translate-y-1/2 text-gray-400'
              size={18}
            />
            <input
              type='text'
              placeholder='Search'
              className='ml-5 p-1 pl-10 rounded-lg bg-[#0E0E0E] focus:outline-none'
            />
          </div>
          {!isSearchOpen && (
            <button
              className='bg-[#0E0E0E] rounded-full p-2 ml-3 sm:hidden'
              onClick={handleShowSearch}
            >
              <Search className='text-gray-400' size={15} />
            </button>
          )}

          {isSearchOpen && (
            <div className='relative'>
              <Search
                className='absolute left-8 top-1/2 -translate-y-1/2 text-gray-400'
                size={18}
              />
              <input
                type='text'
                placeholder='Search'
                className='ml-5 w-48 p-1 pl-10 rounded-lg bg-[#0E0E0E] focus:outline-none'
                ref={inputRef}
                onBlur={handleCloseSearch}
              />
            </div>
          )}
        </div>
        <div>{user.email}
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </header>
  );
};

export default DashboardNavbar;
