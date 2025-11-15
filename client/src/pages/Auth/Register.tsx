import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Register = ( { setUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '', 
    email: '',
    password: '',
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/register", formData);
      localStorage.setItem("token", res.data.token);
      setUser(res.data);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  }

  const showPass = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <main className='min-h-screen flex items-center justify-center'>
        <section aria-labelledby='signin-title'>
          <div className='flex max-w-5xl h-[80vh] shadow-lg overflow-hidden mx-5 rounded-2xl'>
            {/* Left side - image */}
            <div className='w-full h-full hidden md:flex'>
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
                className='text-3xl font-semibold text-white mb-6 text-center'
              >
                Create your Timely account
              </h1>

              <form onSubmit={handleSubmit} action='/login' method='POST' className='space-y-5'>
                <div className='flex flex-col'>
                  <div className='space-y-5'>
                    <p className='text-sm text-gray-400 text-center'>
                      Continue with
                    </p>
                    <div className='flex justify-center w-full '>
                      <GoogleLogin
                        onSuccess={(credentialResponse) => {
                          console.log(
                            'This is the Response:',
                            credentialResponse
                          );

                          console.log(
                            'This is the Response:',
                            credentialResponse
                          );

                          if (credentialResponse.credential) {
                            console.log(
                              jwtDecode(credentialResponse.credential)
                            );
                            navigate('/dashboard');
                          } else {
                            console.error('No credential found in response');
                          }
                        }}
                        onError={() => console.log('Login failed')}
                        theme='filled_black'
                        width='100%'
                        auto_select={true}
                      />
                    </div>
                    <p className='text-sm text-gray-400 mb-2 text-center'>or</p>
                  </div>

                 
                </div>

                <div className='flex flex-col space-y-2'>
                  <label htmlFor='username' className='mb-1 font-medium'>
                    Username
                  </label>
                  <input
                    type='text'
                    id='username'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    required
                    autoComplete='username'
                    className='border border-main rounded-md px-3 py-2 focus:outline-none  focus:border-accent'
                  />
                   <label htmlFor='email' className='mb-1 font-medium'>
                    Email address
                  </label>
                  <input
                    type='text'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete='username'
                    className='border border-main rounded-md px-3 py-2 focus:outline-none  focus:border-accent'
                  />
                  <label htmlFor='password' className='mb-1 font-medium'>
                    Password
                  </label>
                  <div className='relative'>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id='password'
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
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
                  {error && (
                    <p className='text-red-400 text-xs mt-2 italic'>{error}</p>
                  )}
                </div>
                <button
                  type='submit'
                  className='w-full bg-accent text-light-white py-2 rounded-md transition'
                >
                  Register
                </button>
              </form>
              <p className='mt-6 text-sm'>
                Already have an account?{' '}
                <Link to='/login' className='hover:underline'>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Register;
