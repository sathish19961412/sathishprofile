import data from './data/Homedata.json';
import subimage from './sub_image.png';
import './banner.jpg';
import { Fragment } from "react";
import './App.css';
import Navbar from './Navbar';
import Footer  from './Footer';

export default function Home()
{
      return(
        <Fragment>
        <Navbar/>

<section id="banner1">
     <div className='container'>
          <div className='row'>
              <div className='col-md-12'>
               <div className='d-flex justify-content-center'>
                    <h1 className='text-center heading'>{data[0].section2.title}</h1>
               </div>
               </div>
               <div className='col-md-8'>
                    <div className='font-change'>
                         <p className='text-justify'>I fell in love with programming and I have at least learnt something, I think… </p>
                         <p className='text-justify'>I am fluent in classics like Html,Css,Javascript,Bootstrap,Php,Mysql</p>
                         <p className='text-justify'>I also Developing To The Modern Javascript Library and Frameworks  like Reactjs,Angular,Vuejs</p>
                         <p className='text-justify'>
                              My field of Interest's are building new  Web Technologies.So I Self Learn To Python-(Django,Flask Frameworks) and MERN Stack Developing-(Mongodb,Expressjs,Reactjs,Nodejs)
                         </p>
                    </div>
              </div>

              <div className='col-md-4'>
                    <div className='mt-0'>
                         <img src={subimage} className='img-responsive'></img>
                    </div>
              </div>
          </div>
     </div>
</section>

<section id="banner1">
     <div className='container'>
          <div className='row'>
              <div className='col-md-12'>
                 <h1 className='text-center heading'>FIND ME ON</h1>
                 <div className='d-flex justify-content-center'>
                    <p className='sub-2 '>Feel free to connect with me</p>
                 </div>
                 <div>
                    <ul id="unorder">
                         <a href='https://www.facebook.com/people/Sathish-Sathish/pfbid02tJ5J3ZAPXn5HyjJyNeSV7eEqqBkK8rPXvJePgL4e6akUGkNmWf8n1cTE2WawCi5gl/' target='_blank'>
                              <li><i class="fa fa-facebook-square" aria-hidden="true"></i></li>
                         </a>
                         <a href='https://www.linkedin.com/in/sathish-8a3573137/' target='_blank'>
                              <li><i class="fa fa-linkedin-square" aria-hidden="true"></i></li>
                         </a>
                         <a href='https://www.instagram.com/cz12sathish/?igshid=MzNlNGNkZWQ4Mg%3D%3D' target='_blank'>
                              <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
                         </a>
                         <a href='https://github.com/sathish19961412' target='_blank'>
                         <li><i class="fa fa-github" aria-hidden="true"></i></li>
                         </a>
                    </ul>
                 </div>
              </div>
          </div>
     </div>
</section>

<Footer></Footer>
</Fragment>
      );
}