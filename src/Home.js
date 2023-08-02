import data from './data/Homedata.json';
import subimage from './sub_image.png';
import './banner.jpg';
import React from "react";
import './App.css';
import { Element } from 'react-scroll'
export default function Home()
{
      return(
        <Element name='about' className='about'>
          <section id="banner1">
               <div className='container'>
                    <div className='row'>
                    <div className='col-md-12'>
                         <div className='d-flex justify-content-center' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true">
                              <h1 className='text-center heading'>{data[0].section2.title}</h1>
                         </div>
                         </div>
                         <div className='col-md-8'>
                              <div className='font-change'>
                                   <p className='text-justify' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true">I fell in love with programming and I have at least learnt something, I think… </p>
                                   <p className='text-justify' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600" data-aos-once="true">I am fluent in classics like Html,Css,Javascript,Bootstrap,Php,Mysql</p>
                                   <p className='text-justify' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="700" data-aos-once="true">I also Developing To The Modern Javascript Library and Frameworks  like Reactjs,Angular,Vuejs</p>
                                   <p className='text-justify' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800" data-aos-once="true">
                                        My field of Interest's are building new  Web Technologies.So I Self Learn To Python-(Django,Flask Frameworks) and MERN Stack Developing-(Mongodb,Expressjs,Reactjs,Nodejs)
                                   </p>
                              </div>
                    </div>

                    <div className='col-md-4'>
                              <div className='mt-0 cssanimation hu__hu__' data-aos="zoom-out-up" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true">
                                   <img src={subimage} className='img-responsive'></img>
                              </div>
                    </div>
                    </div>
               </div>
          </section>
         </Element>

      );
}