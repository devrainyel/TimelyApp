import PublicNavbar from '../components/layout/PublicNavbar';

function Home() {
  return (
    <>
      <PublicNavbar />
      <div className=' max-w-7xl lg:mx-auto px-6 py-4 mt-20 lg:flex lg:mt-40'>
        <div className='my-auto'>
          <h1 className='text-5xl md:text-7xl text-white'>Collect memories <br></br>connect the moments</h1>
        </div>
        <div className='w-80 lg:ml-auto'>
          <p className='text-sm mt-3 md:text-lg '>
            Timely is where your memories come to life. Share your favorite
            moments, connect with others, and relive the stories that make life
            meaningful
          </p>
          <button className='bg-accent text-sm py-2 px-3 md:py-3 md:px-5 mt-5'>
            Create Account
          </button>
        </div>
      </div>
      <div className='max-w-308 mx-auto px-6 py-6 rounded-t-3xl flex justify-center bg-[#0E0E0E] overflow-hidden h-128 mt-10 lg:mt-26'>
        <div className='grid grid-cols-4 grid-rows-3 gap-2 w-full h-full'>
          {[
            'moment1',
            'moment2',
            'moment3',
            'moment4',
            'moment5',
            'moment6',
            'moment7',
          ].map((moment, i) => (
            <div
              key={i}
              className={
                i === 0
                  ? 'col-span-2 row-span-2'
                  : i === 2
                  ? 'col-span-1 row-span-2'
                  : i === 6
                  ? 'col-span-2 row-span-1'
                  : 'col-span-1 row-span-1'
              }
            >
              <img src={`./${moment}.jpg`} className='grid-image' alt='moment1' />
            </div>
          ))}
         
        </div>
      </div>
    </>
  );
}

export default Home;
