import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if(token) {
        try {
          const res = await axios.get('/api/users/me', {
            headers: {Authorization: `Bearer ${token}`}
          })
          setUser(res.data);
        } catch (err) {
          setError("Failed to fetch user data");
          localStorage.removeItem("token");
        }
      }
    }
    fetchUser();
  }, [])
  return (
    <>
    <title>Timely</title>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login setUser={setUser} />}></Route>
        <Route path='/register' element={<Register setUser={setUser} />}></Route>
        <Route path='/dashboard' element={<Dashboard user={user} error={error} />}></Route>
      </Routes>
    </>
  );
}

export default App;
