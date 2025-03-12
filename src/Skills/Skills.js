import React from 'react'
import {Element} from 'react-scroll'
import '../assets/img/html.png'
import '../assets/img/css.png'
import '../assets/img/js.png'
import '../assets/img/bootstrap.png'
import '../assets/img/php.png'
import '../assets/img/mysql.png'
import '../assets/img/reactjs.png'
import '../assets/img/nodejs.png'
import '../assets/img/python.png'
import '../assets/img/django.png'
import '../assets/img/git.png'
import '../assets/img/photoshop.jpg'
import '../Skills/Skills.css'
import '../assets/css/bootstrap.min.css'
import { Helmet } from 'react-helmet'
const Skills=()=>{

    
   
     return(
      
        <Element name='skils' className='skils'>
            <Helmet>
              <title>Sathish Skills</title>
            </Helmet> 
            <section>
                 <div className='container'>
                    <div className='row'>
                         <div className='col-md-12'>
                             <div className='d-flex justify-content-center pt-3 pb-5'>
                                    <h1>OUR <b>Skills</b></h1>
                             </div>
                         </div>
                     </div>
                     <div className='row'>
                         <div className='col-md-3'>
                           <div id='skill'>
                              <img src={require('../assets/img/html.png')} alt='html' className='img-fluid'/>
                           </div>
                         </div>
                         <div className='col-md-3'>
                           <div id='skill'>
                              <img src={require('../assets/img/css.png')} alt='html' className='img-fluid'/>
                           </div>
                         </div>
                         <div className='col-md-3'>
                           <div id='skill'>
                              <img src={require('../assets/img/js.png')} alt='html' className='img-fluid'/>
                           </div>
                         </div>
                         <div className='col-md-3'>
                           <div id='skill'>
                              <img src={require('../assets/img/bootstrap.png')} alt='html' className='img-fluid'/>
                           </div>
                         </div>
                     </div>
                     <div className='row mt-3'>
                        <div className='col-md-3'>
                           <div id='skill'>
                              <img src={require('../assets/img/php.png')} alt='html' className='img-fluid'/>
                           </div>
                         </div>
                         <div className='col-md-3'>
                           <div id='skill'>
                              <img src={require('../assets/img/mysql.png')} alt='html' className='img-fluid'/>
                           </div>
                         </div>
                         <div className='col-md-3'>
                           <div id='skill'>
                              <img src={require('../assets/img/reactjs.png')} alt='html' className='img-fluid'/>
                           </div>
                         </div>
                         <div className='col-md-3'>
                           <div id='skill'>
                              <img src={require('../assets/img/nodejs.png')} alt='html' className='img-fluid'/>
                           </div>
                         </div>
                       
                    </div>
                    <div className='row mt-3'>
                        <div className='col-md-3'>
                           <div id='skill'>
                              <img src={require('../assets/img/python.png')} alt='html' className='img-fluid'/>
                           </div>
                         </div>
                         <div className='col-md-3'>
                           <div id='skill'>
                              <img src={require('../assets/img/django.png')} alt='html' className='img-fluid'/>
                           </div>
                         </div>
                         <div className='col-md-3'>
                           <div id='skill'>
                              <img src={require('../assets/img/git.png')} alt='html' className='img-fluid'/>
                           </div>
                         </div>
                         <div className='col-md-3'>
                           <div id='skill'>
                              <img src={require('../assets/img/photoshop.jpg')} alt='html' className='img-fluid'/>
                           </div>
                         </div>
                    </div>
                 </div>
            </section>
        </Element>
     )
}

export default Skills;