import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
      </Routes>
    </>
  );
}

export default App;
