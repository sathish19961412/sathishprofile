// import logo from './logo.svg';
import React from 'react';
import './App.css';
import '../src/assets/css/cssanimation.css';
import Navbar from './Navbar';
import Home from './Home';
import Skills from './Skills/Skills';
import Contacts from './Contact';
import Footer from './Footer';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home/>
        <Skills />
        <Projects />
        <Experience />
        <Contacts />
        <Footer />
    </div>
  );
}

export default App;
