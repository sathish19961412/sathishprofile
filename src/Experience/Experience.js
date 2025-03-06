import React from 'react'
import '../Experience/Experience.css'
import {Element} from 'react-scroll'
import  exp from '../assets/img/exp.png'
const Experience=()=>{
     return(
        <Element name='exp' className='exp'>
             <section id='experience' className='pt-5 pb-5'>
                 <div className='container'>
                    <div className='row'>
                         <div className='col-md-12'>
                             <div className='d-flex justify-content-center pt-3 pb-5'>
                                    <h1>OUR <b>Experience</b></h1>
                             </div>
                         </div>

                         <div className='col-md-6'>
                              <div className='exp-5 mt-3'>
                                   <p className='text-justify exp-4'>
                                        We are Experience in UI Design and Developmenmt More than 3.5 years.20+ Website Developmenmt Successfully.

                                        We are Experience in Html,Css,Javascript,Bootstrap,Corephp,Mysql
                                  
                                        We are knowledge and Working To the Javascript-Reactjs,nodejs,expressjs,mongodb
                                
                                        We are knowledge and Working To the Python,Django,
                                   </p>
                              </div>
                                  
                         </div>
                         <div className='col-md-6'>
                              <img src={exp} className='img-fluid'/>
                         </div>
                    </div>
                   
                 </div>
            </section>
        </Element>
     );
}

export default Experience;