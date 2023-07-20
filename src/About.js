import data from './data/Homedata.json';
import { Fragment } from "react";
import './App.css';
import {Link} from "react-router-dom";
import Footer  from './Footer';
import Navbar from './Navbar';

export default function Abouts()
{
      return(
        <Fragment>
         <Navbar/>
  <section id="about">
  <div className='container'>
      <div className='row'>
        <div className='col-md-8 mt-5'>
            <h1 className='text-left'>About US</h1>
        </div>
        <div className='col-md-4 mt-5'>
            <h1 className='text-center'>About US</h1>
        </div>
      </div>
  </div>
</section>
<Footer></Footer>
</Fragment>
      );
}