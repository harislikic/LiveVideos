import React, { useEffect } from 'react';
import Home from './pages/Home';

import MissingVideo from './pages/MissingVideo';
import { observer } from 'mobx-react-lite';

import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NavBar from './pages/NavBar';
import Videos from './pages/Video';
import Register from './pages/Register';

function App() {

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<Videos />} />
        <Route path="/signup" element={<Register />} />
        <Route path="Not-found" element={<MissingVideo />} />
      </Routes>
    </div>
  );
}

export default observer(App);
