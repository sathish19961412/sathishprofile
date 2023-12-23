import React from 'react'
import '../Experience/Experience.css'
import {Element} from 'react-scroll'
const Experience=()=>{
     return(
        <Element name='exp' className='exp'>
             <section id='experience'>
                 <div className='container'>
                    <div className='row'>
                         <div className='col-md-12'>
                             <div className='d-flex justify-content-center pt-3 pb-5'>
                                    <h1>OUR <b>Experience</b></h1>
                             </div>
                         </div>
                         <div className='col-md-1'>&nbsp;</div>
                         <div className='col-md-10'>
                             <div className='d-flex justify-content-justify'>
                                   <p>
                                        We are Experience in UI Design and Developmenmt More than 2.5 years.<br></br> 20+ Website Developmenmt Successfully.

                                   </p>
                             </div>
                             <div className='d-flex justify-content-justify'>
                                   <p>
                                        We are Experience in <span>Html,Css,Javascript,Bootstrap,Corephp,Mysql</span>
                                   </p>
                             </div>
                             <div className='d-flex justify-content-justify'>
                                   <p>
                                        We are knowledge and Working To the Javascript-<span>Reactjs,angular,nodejs,expressjs,mongodb</span>
                                   </p> 
                             </div>
                             <div className='d-flex justify-content-justify'>
                                   <p>
                                        We are knowledge and Working To the Python-<span>Python,Django,FastAPI</span>
                                   </p>
                             </div>
                         </div>
                         <div className='col-md-1'>&nbsp;</div>
                    </div>
                   
                 </div>
            </section>
        </Element>
     );
}

export default Experience;