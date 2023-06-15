import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          
        </Routes>
      </Router>

  );
}

export default App;
