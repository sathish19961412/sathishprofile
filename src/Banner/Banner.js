import React from "react";
import './Banner.css';
import { Element } from 'react-scroll'

function Banner() {
  return (
    <Element name='about' className='about'>
          <section id="banner2">
               <div className='container'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className='d-flex justify-content-center' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true">
                                <h3 className='text-center heading'>UI DESIGNER & DEVELOPER</h3>
                            </div>
                            <div className='d-flex justify-content-center' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true">
                                <p className='text-justify' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true">I fell in love with programming . I have at least learnt</p>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className='d-flex justify-content-center' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true">
                                {/* <h1 className='text-center heading'>{data[0].section2.title}</h1> */}
                            </div>
                        </div>
                    </div>
               </div>
          </section>
         </Element>
  )
}

export default Banner;
