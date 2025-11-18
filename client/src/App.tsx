import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import { useState, useEffect } from 'react';
import NotFound from './pages/NotFound';
import axios from 'axios';
import Loading from './components/ui/Loading';
import { Toaster } from 'react-hot-toast';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await axios.get('/api/users/me', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data);
          setLoading(false);
        } catch (err) {
          setError('Failed to fetch user data');
          localStorage.removeItem('token');
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  if (loading) return <Loading />;
  return (
    <>
      <title>Timely</title>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route
          path='/login'
          element={
            user ? <Navigate to='/dashboard' /> : <Login setUser={setUser} />
          }
        ></Route>
        <Route
          path='/register'
          element={
            user ? <Navigate to='/dashboard' /> : <Register setUser={setUser} />
          }
        ></Route>
        <Route
          path='/dashboard'
          element={<Dashboard user={user} setUser={setUser} error={error} />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
