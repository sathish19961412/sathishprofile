import React from 'react'
import {Element} from 'react-scroll'
import '../Skills/Skills.css'
import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import js from '../assets/img/js.png'
import bootstrap from '../assets/img/bootstrap.png'
import reactjs from '../assets/img/reactjs.png'
import php from '../assets/img/php.png'
import mysql from '../assets/img/mysql.png'
import nodejs from '../assets/img/nodejs.png'
import express from '../assets/img/express.png'
import mongodb from '../assets/img/mongodb.png'
import python from '../assets/img/python.png'
import django from '../assets/img/django.png'

const Skills=()=>{
     return(
        <Element name='skils' className='skils'>
            <section id='banner4'>
                 <div className='container'>
                    <div className='row'>
                         <div className='col-md-12'>
                             <div className='d-flex justify-content-center pt-3 pb-5'>
                                    <h1>OUR <b>Skills</b></h1>
                             </div>
                         </div>
                         <div className='col-md-3'>
                            <div className='skils_set_box'>
                                <div className='d-flex justify-content-center '>
                                        <img src={html} className='img-fluid' />
                                </div>
                                <div className='d-flex justify-content-center pt-3'>
                                       <span className='color-1'>HTML5</span>
                                </div>
                             </div>
                         </div>
                         <div className='col-md-3'>
                            <div className='skils_set_box'>
                                <div className='d-flex justify-content-center'>
                                        <img src={css} className='img-fluid' />
                                </div>
                                <div className='d-flex justify-content-center pt-3'>
                                       <span className='color-1'>CSS3</span>
                                </div>
                             </div>
                         </div>
                         <div className='col-md-3'>
                            <div className='skils_set_box'>
                                <div className='d-flex justify-content-center'>
                                        <img src={js} className='img-fluid' />
                                </div>
                                <div className='d-flex justify-content-center pt-3'>
                                       <span className='color-1'>JAVASCRIPT</span>
                                </div>
                             </div>
                         </div>
                         <div className='col-md-3'>
                            <div className='skils_set_box'>
                                <div className='d-flex justify-content-center'>
                                        <img src={bootstrap} className='img-fluid' />
                                </div>
                                <div className='d-flex justify-content-center pt-3'>
                                       <span className='color-1'>BOOTSTRAP</span>
                                </div>
                             </div>
                         </div>
                    </div>
                    <div className='row mt-3' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true">
                         <div className='col-md-3'>
                            <div className='skils_set_box'>
                                <div className='d-flex justify-content-center'>
                                        <img src={reactjs} className='img-fluid' />
                                </div>
                                <div className='d-flex justify-content-center pt-3'>
                                       <span className='color-1'>REACTJS</span>
                                </div>
                             </div>
                         </div>
                         <div className='col-md-3'>
                            <div className='skils_set_box'>
                                <div className='d-flex justify-content-center'>
                                        <img src={php} className='img-fluid' />
                                </div>
                                <div className='d-flex justify-content-center pt-3'>
                                       <span className='color-1'>PHP</span>
                                </div>
                             </div>
                         </div>
                         <div className='col-md-3'>
                            <div className='skils_set_box'>
                                <div className='d-flex justify-content-center'>
                                        <img src={mysql} className='img-fluid' />
                                </div>
                                <div className='d-flex justify-content-center pt-3'>
                                       <span className='color-1'>MYSQL</span>
                                </div>
                             </div>
                         </div>
                         <div className='col-md-3'>
                            <div className='skils_set_box'>
                                <div className='d-flex justify-content-center'>
                                        <img src={nodejs} className='img-fluid' />
                                </div>
                                <div className='d-flex justify-content-center pt-3'>
                                       <span className='color-1'>NODEJS</span>
                                </div>
                             </div>
                         </div>
                    </div>

                    <div className='row mt-3' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true">
                         <div className='col-md-3'>
                            <div className='skils_set_box'>
                                <div className='d-flex justify-content-center'>
                                        <img src={express} className='img-fluid' />
                                </div>
                                <div className='d-flex justify-content-center pt-3'>
                                       <span className='color-1'>EXpress JS</span>
                                </div>
                             </div>
                         </div>
                         <div className='col-md-3'>
                            <div className='skils_set_box'>
                                <div className='d-flex justify-content-center'>
                                    <img src={mongodb} className='img-fluid' />
                                </div>
                                <div className='d-flex justify-content-center pt-3'>
                                       <span className='color-1'>MONGODB</span>
                                </div>
                             </div>
                         </div>
                         <div className='col-md-3'>
                            <div className='skils_set_box'>
                                <div className='d-flex justify-content-center'>
                                        <img src={python} className='img-fluid' />
                                </div>
                                <div className='d-flex justify-content-center pt-3'>
                                       <span className='color-1'>PYTHON</span>
                                </div>
                             </div>
                         </div>
                         <div className='col-md-3'>
                            <div className='skils_set_box'>
                                <div className='d-flex justify-content-center'>
                                        <img src={django} className='img-fluid' />
                                </div>
                                <div className='d-flex justify-content-center pt-3'>
                                       <span className='color-1'>DJANGO</span>
                                </div>
                             </div>
                         </div>
                    </div>
                 </div>
            </section>
        </Element>
     )
}

export default Skills;