import React from 'react'
import Image1 from '../assets/img/projects/techdigitalcorp.png'
import Image2 from '../assets/img/projects/agriindiamart-2023.png'
import Image3 from '../assets/img/projects/arunrega.png'
import Image4 from '../assets/img/projects/ayyai-in-2023.png'
import Image5 from '../assets/img/projects/beegoindustries.png'
import Image6 from '../assets/img/projects/bharathiindustries.png'
import Image7 from '../assets/img/projects/dreamstarz-in-2023.png'
import Image8 from '../assets/img/projects/drthirueyeclinic.png'
import Image9 from '../assets/img/projects/kannantoolsanddies.png'
import Image10 from '../assets/img/projects/limratfe-in.png'
import Image11 from '../assets/img/projects/rasikitchenequipments.png'
import Image12 from '../assets/img/projects/rvmachinetools-in.png'
import Image13 from '../assets/img/projects/sheltronics-co-in.png'
import Image14 from '../assets/img/projects/smartenggindia-2023.png'
import Image15 from '../assets/img/projects/sortierfeedingsystems.png'
import Image16 from '../assets/img/projects/svve-in-2023.png'
import Image17 from '../assets/img/projects/technocap-net.png'
import Image18 from '../assets/img/projects/truweigh-in-infra.png'
import Image19 from '../assets/img/projects/gomakemytrip.png'

import {Element} from 'react-scroll'

const Projects=()=>{
     return(
        <Element name='projects' className='Projects'>
             <section id="banner2">
                 <div className='container'>
                    <div className='row'>
                         <div className='col-md-12'>
                             <div className='d-flex justify-content-center'>
                                    <h1>OUR <b>Projects</b></h1>
                             </div>
                         </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-md-4'>&nbsp;</div>
                        <div className='col-md-4'>
                             <div className='d-flex justify-content-center'>
                              <div className='mt-1'>
                                        <a  data-fancybox="gallery" data-src={Image1} data-caption="https://www.techdigitalcorp.com/">
                                          <img  src={Image1} className='img-fluid'   />
                                        </a>
                                        <a data-fancybox="gallery" data-src={Image2} data-caption="AgriIndiaMart" href='https://agriindiamart.com/'></a>
                                        <a data-fancybox="gallery" data-src={Image3}></a>
                                        <a data-fancybox="gallery" data-src={Image10}></a>
                                        <a data-fancybox="gallery" data-src={Image13}></a>
                                        <a data-fancybox="gallery" data-src={Image16}></a>
                                        <a data-fancybox="gallery" data-src={Image4}></a>
                                        <a data-fancybox="gallery" data-src={Image5}></a>
                                        <a data-fancybox="gallery" data-src={Image6}></a>
                                        <a data-fancybox="gallery" data-src={Image11}></a>
                                        <a data-fancybox="gallery" data-src={Image14}></a>
                                        <a data-fancybox="gallery" data-src={Image17}></a>
                                        <a data-fancybox="gallery" data-src={Image7}></a>
                                        <a data-fancybox="gallery" data-src={Image8}></a>
                                        <a data-fancybox="gallery" data-src={Image9}></a>
                                        <a data-fancybox="gallery" data-src={Image12}></a>
                                        <a data-fancybox="gallery" data-src={Image15}></a>
                                        <a data-fancybox="gallery" data-src={Image18}></a>
                                        <a data-fancybox="gallery" data-src={Image19}></a>
                              </div>
                             </div>
                         </div>
                         <div className='col-md-4'>&nbsp;</div>
                    </div>
                 </div>
            </section>
        </Element>
     );
}

export default Projects;