import PublicNavbar from '../components/layout/PublicNavbar';

function Home() {
    return (
        <>
        <PublicNavbar />
        <div className=' max-w-7xl lg:mx-auto px-6 py-4 mt-20 lg:flex lg:mt-40'>
        <div className='my-auto'>
          <h1 className='text-5xl md:text-7xl text-white'>Collect memories</h1>
          <h1 className='text-5xl md:text-7xl text-white'>
            connect the moments
          </h1>
        </div>
        <div className='w-80 lg:ml-auto'>
          <p className='text-sm mt-3 md:text-lg '>
            Timely is where your memories come to life. Share your favorite
            moments, connect with others, and relive the stories that make life
            meaningful
          </p>
          <button className='text-sm py-2 px-3 md:py-3 md:px-5 mt-5 color-accent'>
            Create Account
          </button>
        </div>
      </div>
      <div className='max-w-[calc(80rem-3rem)] rounded-t-3xl flex justify-center mx-auto px-6 py-6 h-128 bg-[#0E0E0E] mt-10 lg:mt-26 overflow-hidden'>
        <div className='grid grid-cols-4 grid-rows-3 gap-2 w-full h-full'>
          <div className='col-span-2 row-span-2'>
            <img
              src='./moment1.jpg'
              className='w-full h-full object-cover rounded-lg'
              alt='moment1'
            />
          </div>

          <div className='col-span-1 row-span-1'>
            <img
              src='./moment2.jpg'
              className='w-full h-full object-cover rounded-lg'
              alt='moment2'
            />
          </div>
          <div className='col-span-1 row-span-2'>
            <img
              src='./moment3.jpg'
              className='w-full h-full object-cover rounded-lg'
              alt='moment3'
            />
          </div>

          <div className='col-span-1 row-span-1'>
            <img
              src='./moment4.jpg'
              className='w-full h-full object-cover rounded-lg'
              alt='moment4'
            />
          </div>
          <div className='col-span-1 row-span-1'>
            <img
              src='./moment5.jpg'
              className='w-full h-full object-cover rounded-lg'
              alt='moment5'
            />
          </div>
          <div className='col-span-1 row-span-1'>
            <img
              src='./moment6.jpg'
              className='w-full h-full object-cover rounded-lg'
              alt='moment6'
            />
          </div>
          <div className='col-span-2 row-span-1'>
            <img
              src='./moment7.jpg'
              className='w-full h-full object-cover rounded-lg'
              alt='moment7'
            />
          </div>
        </div>
      </div>
      </>
    )
}

export default Home;