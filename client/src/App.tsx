import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <>
    <title>Timely</title>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
