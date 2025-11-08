import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const showPass = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className='min-h-screen flex items-center justify-center'>
      <section aria-labelledby='signin-title'>
        <div className='flex max-w-5xl h-[80vh] shadow-lg overflow-hidden mx-5 rounded-2xl'>
          {/* Left side - image */}
          <div className='w-full hidden md:flex'>
            <img
              src='./signin-bg.jpg'
              alt='Sign in background'
              className='w-full h-full object-cover'
            />
          </div>
          {/* Right side - form */}
          <div className='w-full flex flex-col justify-center p-10 bg-[#0E0E0E]'>
            <h1
              id='signin-title'
              className='text-3xl font-semibold text-white mb-6'
            >
              Time to share a moment. <br></br>
              Log in to your Timely account
            </h1>

            <form action='/login' method='POST' className='space-y-5'>
              <div className='flex flex-col'>
                <label htmlFor='email' className='mb-1 font-medium'>
                  Email address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  autoComplete='username'
                  className='border border-main rounded-md px-3 py-2 focus:outline-none  focus:border-accent'
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='password' className='mb-1 font-medium'>
                  Password
                </label>
                <div className='relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    name='password'
                    required
                    autoComplete='current-password'
                    className='border border-main rounded-md px-3 py-2 focus:outline-none w-full focus:border-accent'
                  />
                  <button
                    type='button'
                    onClick={showPass}
                    className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white'
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <button
                type='submit'
                className='w-full bg-accent text-light-white py-2 rounded-md transition'
              >
                Log in
              </button>
            </form>
            <p className='mt-6 text-sm'>
              Don’t have an account?{' '}
              <a href='/register' className='hover:underline'>
                Create one
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
