import React from 'react'
import webdesign from '../assets/img/web_design.png'
import frontend from '../assets/img/frontend.png'
import fullstack from '../assets/img/fullstack.png'
import './work.css';
function Work() {
  return (
    <div>
       <section className='mb-5'>
             <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='d-flex justify-content-center'>
                             <h1 className='text-center heading'>Current Works</h1>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-4'>
                        <div id='border-4'>
                            
                            <div className='d-flex justify-content-center'>
                                <img src={webdesign} className='img-fluid'/>
                            </div>
                            <div className='d-flex justify-content-center'>
                               <h5>Web Design</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div id='border-4'>
                            <div className='d-flex justify-content-center'>
                                <img src={frontend} className='img-fluid'/>
                            </div>
                            <div className='d-flex justify-content-center'>
                               <h5>Frontend Development</h5>
                            </div>
                          
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div id='border-4'>
                            <div className='d-flex justify-content-center'>
                                <img src={fullstack} className='img-fluid'/>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <h5>Fullstack Development</h5>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
       </section>
    </div>
  )
}

export default Work;
