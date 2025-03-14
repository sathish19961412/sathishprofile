import React from 'react'
import '../Experience/Experience.css'
import {Element} from 'react-scroll'
import { Helmet } from 'react-helmet'
const Experience=()=>{
     return(
        <Element name='exp' className='exp'>
               <Helmet>
                   <title>Sathish Experience</title>
               </Helmet>
             <section  className='pt-5 pb-5'>
                 <div className='container'>
                    <div className='row'>
                         <div className='col-md-12'>
                             <div className='d-flex justify-content-center pt-3 pb-5'>
                                    <h1>OUR <b>Experience</b></h1>
                             </div>
                         </div>

                         <div className='col-md-12' id='experience'>
                              <div className='exp-5 mt-3'>
                                   <p className='exp-4'>
                                        We are Experience in UI Design and Developmenmt More than 3.7 years.20+ Website Developmenmt Successfully.
                                   </p>
                                   <p>
                                        We are Experience in Html,Css,Javascript,Bootstrap,<br></br>Corephp,Mysql
                                   </p>
                                   <p>
                                        We are knowledge and Working To the Javascript Reactjs,nodejs,expressjs,mongodb
                                   </p>
                                   <p>
                                        We are knowledge and Working To the Python,Django,
                                   </p>
                              </div>
                                  
                         </div>
                    </div>
                   
                 </div>
            </section>
        </Element>
     );
}

export default Experience;