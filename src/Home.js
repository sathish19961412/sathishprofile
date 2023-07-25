import data from './data/Homedata.json';
import subimage from './sub_image.png';
import './banner.jpg';
import { Fragment } from "react";
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
                    <div data-aos="zoom-in">
                         <p className='banner-para' >I AM <b className='text-1'>BECOME A</b></p>
                    </div>
                   
                     <h1 className='banner-title'><b className='text-1'>UI</b> DEVELOPER</h1>
                     <h2 className='banner-title1'>PHP <b className='text-1'>DEVELOPER</b></h2>
               </div>
               </div>
          </div>
     </section>

<section id="banner1">
     <div className='container'>
          <div className='row'>
              <div className='col-md-8'>
                 <h1 className='text-center heading'>{data[0].section2.title}</h1>
                 <p className='text-justify'>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
                 <p className='text-justify'>I am fluent in classics like C++, Javascript and Go.</p>
                 <p className='text-justify'>My field of Interest's are building new  Web Technologies and Products and also in areas related to Blockchain.</p>
                 <p className='text-justify'>Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js</p>
              </div>

              <div className='col-md-4'>
                    <div className='mt-5'>
                         <img src={subimage} className='img-responsive'></img>
                    </div>
              </div>
          </div>
     </div>
</section>

<section id="banner1">
     <div className='container'>
          <div className='row'>
              <div className='col-md-12'>
                 <h1 className='text-center heading'>FIND ME ON</h1>
                 <div className='d-flex justify-content-center'>
                    <p className='sub-2 '>Feel free to connect with me</p>
                 </div>
                 <div>
                    <ul id="unorder">
                         <li><i class="fa fa-facebook-square" aria-hidden="true"></i></li>
                         <li><i class="fa fa-linkedin-square" aria-hidden="true"></i></li>
                         <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
                    </ul>
                 </div>
              </div>
          </div>
     </div>
</section>

<Footer></Footer>
</Fragment>
      );
}