// import logo from './logo.svg';
import React from 'react';
import './App.css';
import '../src/assets/css/cssanimation.css';
import Navbar from './Navbar';
import Home from './Home';
import Contacts from './Contact';
import Footer from './Footer';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home/>
        <Contacts />
        <Footer />
    </div>
  );
}

export default App;
