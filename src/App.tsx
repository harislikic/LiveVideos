import React from 'react';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Error from './pages/Error';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos/1" element={<Videos />} />
          <Route path="/videos/2" element={<Error />} />
        </Routes>
      </nav>
    </>
  );
}

export default App;
