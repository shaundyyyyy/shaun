import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Home from './pages';
import About from './pages/About';
import AmazingCredentials from './pages/AmazingCredentials';
import Amazingstuff from './pages/Amazingstuff';

function App() {
  return (
    
    <Router>
      <Navbar />
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/About" exact element={<About/>}/>
            <Route path="/AmazingCredentials" exact element={<AmazingCredentials/>}/>
            <Route path="/Amazingstuff" exact element={<Amazingstuff/>}/>
        </Routes>
      </Router>
    
  );
}

export default App;
