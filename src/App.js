// import logo from './logo.svg';
import React from 'react';
import './App.css';
import '../src/assets/css/cssanimation.css';
import Home from './Home';
import {Routes,Route} from 'react-router-dom';
import Contacts from './Contact';
import Abouts from './About';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<Abouts/>}></Route>
            <Route path='/contact' element={<Contacts/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
