import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <nav className='fixed top-0 h-20 left-0 w-full'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-6 py-4'>
        <h1 className='text-2xl font-heading text-white tracking-wide'>
          Timely
        </h1>
        <ul className='hidden gap-5 md:flex'>
          <li>Home</li>
          <li>Register</li>
          <li>Sign In</li>
        </ul>
        <RxHamburgerMenu className='text-white text-4xl md:hidden' />
      </div>
    </nav>
  );
}

export default Navbar;