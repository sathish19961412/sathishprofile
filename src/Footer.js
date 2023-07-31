import React, { Fragment } from "react";
import './App.css';
import data from './data/Homedata.json'

export default function Footer()
{
    return(
        <>
       <section id="banner1">
     <div className='container'>
          <div className='row'>
              <div className='col-md-12'>
                 <h1 className='text-center heading' data-aos="zoom-out-up" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true">FIND ME ON</h1>
                 <div className='d-flex justify-content-center'>
                    <p className='sub-2' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true">Feel free to connect with me</p>
                 </div>
                 <div>
                    <ul id="unorder">
                         <a href='https://www.facebook.com/people/Sathish-Sathish/pfbid02tJ5J3ZAPXn5HyjJyNeSV7eEqqBkK8rPXvJePgL4e6akUGkNmWf8n1cTE2WawCi5gl/' target='_blank'>
                              <li data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true"><i class="fa fa-facebook-square" aria-hidden="true"></i></li>
                         </a>
                         <a href='https://www.linkedin.com/in/sathish-8a3573137/' target='_blank'>
                              <li data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true"><i class="fa fa-linkedin-square" aria-hidden="true"></i></li>
                         </a>
                         <a href='https://www.instagram.com/cz12sathish/?igshid=MzNlNGNkZWQ4Mg%3D%3D' target='_blank'>
                              <li data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true"><i class="fa fa-instagram" aria-hidden="true"></i></li>
                         </a>
                         <a href='https://github.com/sathish19961412' target='_blank'>
                              <li data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true"><i class="fa fa-github" aria-hidden="true"></i></li>
                         </a>
                    </ul>
                 </div>
              </div>
          </div>
     </div>
</section>

      </>
    );
}