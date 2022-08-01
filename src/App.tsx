import React from "react";
import Home from './Home';
import Videos from "./Videos";
import Error from "./Error";
import { Routes, Route, Link } from "react-router-dom";



function App() {

  return  (
    <>
    <nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/1" element={<Videos />} />
        <Route path="/videos/2" element={<Error />} />
      </Routes>
    </nav>
  </>
  )
}



export default App;
