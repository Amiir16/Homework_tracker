import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import HomeworkTracer from './Components/HomeWorkTracer';
import Navbar from './Navbar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp ';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/HomeworkTracer' element={<HomeworkTracer />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
