import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/Auth/SignIn';
import Register from './pages/Auth/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
