import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Navbar/Navbar'
import Home from '../src/pages/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { react, useEffect, useState } from 'react';


function App() {
  return (

    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route element={<Home/>} exact path="/" />
      </Routes>
      </Router>
    </div>

  );
}

export default App;