import React from "react";
import './Banner.css';
import subimage from '../sub_image.png';
import js from '../assets/img/js.png'
import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import bootstrap from '../assets/img/bootstrap.png'
import php from '../assets/img/php.png';
import python from '../assets/img/python.png';
import nodejs from '../assets/img/nodejs.png';
import mysql from '../assets/img/mysql.png'
import { Element } from 'react-scroll'

function Banner() {
  return (
    <Element name='about' className='about'>
          <section id="banner2">
               <div className='container'>
                    <div className='row' id="banner_section">
                        <div className='col-md-7'>
                            <div className='d-flex mt-5' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true">
                                <span id="hello">Hello, I'm</span>
                            </div>
                            <div className='d-flex' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true">
                                <h1 id="name">Sathish</h1>
                            </div>
                            <div className='d-flex' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true">
                                <p className='text-justify' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true">A Creative <span className="designer">Web Designer</span> and  <span className="developer">Developer</span> From <span className="location">Coimbatore</span></p>
                            </div>
                            <div className='d-flex' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true">
                                <span className='text-justify' id="slug" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true">I'm creative designer based in New York, and I'm very passionate and dedicated to my work.</span>
                            </div>
                            <div className='d-flex mt-4' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true">
                                 <a href="" className="about_button"><span>About Me</span></a>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className='d-flex justify-content-center' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true" id="banner6">
                                <div className="cssanimation hu__hu__">
                                    <img src={html} className='skil-4 bg-white p-2' />
                                    <div className="mt-1 mb-1"></div>
                                    <img src={css} className='skil-4 bg-white p-2' />
                                    <div className="mt-1 mb-1"></div>
                                    <img src={bootstrap} className='skil-4 bg-white p-2' />
                                    <div className="mt-1 mb-1"></div>
                                    <img src={js} className='skil-4 bg-white p-2' />
                                </div>
                                
                                <img src={subimage} className='img-responsive' id="banner4" />
                                <div className="cssanimation hu__hu__">
                                    <img src={php} className='skil-14 bg-white p-2' />
                                    <div className="mt-1 mb-1"></div>
                                    <img src={python} className='skil-14 bg-white p-2' />
                                    <div className="mt-1 mb-1"></div>
                                    <img src={nodejs} className='skil-14 bg-white p-2' />
                                    <div className="mt-1 mb-1"></div>
                                    <img src={mysql} className='skil-14 bg-white p-2' />
                                </div>
                                
                            </div>
                        </div>
                    </div>
               </div>
          </section>
         </Element>
  )
}

export default Banner;
