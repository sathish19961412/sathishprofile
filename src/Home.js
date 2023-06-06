import data from './data/Homedata.json';
import './banner.jpg';
import { Fragment } from "react";
import { Table } from 'react-bootstrap';
import './App.css';

import Navbar from './Navbar';
import Footer  from './Footer';

export default function Home()
{
      return(
        <Fragment>
        <Navbar/>
     <section id='banner'>
          <div className='container'>
               <div className='row'>
               <div className='col-md-12 mt-5'>
                    
               </div>
               </div>
          </div>
     </section>

<section id="banner1">
     <div className='container'>
          <div className='row'>
              <div className='col-md-12'>
                 <h1 className='text-center heading'>{data[0].section2.title}</h1>
                 <p className='sub-2 '>{data[0].section2.content}</p>
              </div>
          </div>
     </div>
</section>

<section id="banner1">
     <div className='container'>
          <div className='row'>
              <div className='col-md-12'>
                 <h1 className='text-center heading'>{data[0].section3.title}</h1>
                 <p className='sub-2 '>{data[0].section3.content}</p>
              </div>
          </div>
     </div>
</section>
<section id="banner1">
     <div className='container'>
          <div className='row'>
              <div className='col-md-12'>
                 <h1 className='text-center heading'>{data[0].section4.title}</h1>
                 <p className='sub-2 '>{data[0].section4.content}</p>
              </div>
          </div>
     </div>
</section>
<section id="banner1">
     <div className='container'>
          <div className='row'>
              <div className='col-md-12'>
                 <h1 className='text-center heading'>{data[0].section5.title}</h1>
                 <p className='sub-2 '>{data[0].section5.content}</p>
              </div>
          </div>
     </div>
</section>
<section id="banner1">
     <div className='container'>
          <div className='row'>
              <div className='col-md-12'>
                 <h1 className='text-center heading'>{data[0].contactus.title}</h1>
                 <p className='sub-2 '>{data[0].section5.content}</p>
              </div>
          </div>
     </div>
</section>
<Footer></Footer>
</Fragment>
      );
}