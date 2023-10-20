import React from 'react'
import Image1 from '../assets/img/projects/techdigitalcorp.png'
import {Element} from 'react-scroll'

const Projects=()=>{
     return(
        <Element name='projects' className='Projects'>
             <section id="banner1">
                 <div className='container'>
                    <div className='row'>
                         <div className='col-md-12'>
                             <div className='d-flex justify-content-center'>
                                    <h1>OUR <b>Projects</b></h1>
                             </div>
                         </div>
                    </div>
                    <div className='row mt-2'>
                         <div className='col-md-4'>
                             <div className='d-flex justify-content-center'>
                              <div className='mt-1'>
                                        <a  data-fancybox="gallery" data-src={Image1} data-caption="BOOMI POOJA">
                                        <img  src={Image1} className='img-fluid'  alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
                                        </a>
                                        <a data-fancybox="gallery" data-src={Image1}></a>
                                        <a data-fancybox="gallery" data-src={Image1}></a>
                              </div>
                             </div>
                         </div>
                         <div className='col-md-4'>
                             <div className='d-flex justify-content-center'>
                              <div className='mt-1'>
                                        <a  data-fancybox="gallery" data-src={Image1} data-caption="BOOMI POOJA">
                                        <img  src={Image1} className='img-fluid'  alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
                                        </a>
                                        <a data-fancybox="gallery" data-src={Image1}></a>
                                        <a data-fancybox="gallery" data-src={Image1}></a>
                              </div>
                             </div>
                         </div>
                         <div className='col-md-4'>
                             <div className='d-flex justify-content-center'>
                              <div className='mt-1'>
                                        <a  data-fancybox="gallery" data-src={Image1} data-caption="BOOMI POOJA">
                                        <img  src={Image1} className='img-fluid'  alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
                                        </a>
                                        <a data-fancybox="gallery" data-src={Image1}></a>
                                        <a data-fancybox="gallery" data-src={Image1}></a>
                              </div>
                             </div>
                         </div>
                    </div>
                 </div>
            </section>
        </Element>
     );
}

export default Projects;