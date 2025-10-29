import './App.css';

function App() {
  return (
    <>
      <nav className='fixed top-0 h-20 left-0 w-full'>
        <div className='max-w-7xl mx-auto flex justify-between items-center px-6 py-4'>
          <h1 className='text-2xl font-heading text-white tracking-wide'>
            Timely
          </h1>
          <ul className='flex gap-5'>
            <li>Home</li>
            <li>Register</li>
            <li>Sign In</li>
          </ul>
        </div>
      </nav>
      <div className='lg:flex max-w-7xl  lg:mx-auto px-6 py-4 mt-40'>
        <div>
          <h1 className='font-heading text-5xl md:text-7xl text-white'>
            Collect memories
          </h1>
          <h1 className='font-heading text-5xl md:text-7xl text-white'>
            connect through moments
          </h1>
        </div>
        <div className="w-96 ml-auto">
          <p className="text-sm md:text-base">
            Timely is where your memories come to life. Share your favorite
            moments, connect with others, and relive the stories that make life
            meaningful
          </p>
          <button className="py-3 px-5 mt-5 color-accent">Get Started</button>
        </div>
      </div>
      <div className="max-w-7xl rounded-t-3xl flex justify-center mx-auto mb-auto mt-26 px-6 h-128 bg-[#0E0E0E]">
          <img src="./hero-pic-copy.jpg" className="w-xl object-cover pt-10" />
      </div>
    </>
  );
}

export default App;
