import React from 'react'
import {Element} from 'react-scroll'
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../Skills/Skills.css'
import '../assets/css/bootstrap.min.css'

const Skills=()=>{

     const now = 90;
     const html='HTML';
     const now1 = 85;
     const css='CSS';
     const js='Javascript';
     const now2 =60;
     const bootstrap='Bootstrap'
     const now3=90;
     const react='Reactjs'
     const now4=50;
     const php='Php';
     const now5=60;
     const photoshop='Photoshop';
     const mysql="Mysql";
     const expressjs='Expressjs';
     const nodejs='Nodejs';
     const mongodb='Mongodb';
     const python='Python';
     const django='Django';
    

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
                    
                         <div className='col-md-6'>
                            <ProgressBar className='p--1' now={now} variant='success' label={` ${html} - ${now}% `} /><br></br>
                            <ProgressBar className='p--1' now={now1} variant='success' label={` ${css} - ${now1}% `} /><br></br>
                            <ProgressBar className='p--1' now={now2} variant="success" label={` ${js} - ${now2}% `} /><br></br>
                            <ProgressBar className='p--1' now={now3} variant="success" label={` ${bootstrap} - ${now3}% `} /><br></br>
                            <ProgressBar className='p--1' now={now4} variant="success" label={` ${react} - ${now4}% `} /><br></br>
                            <ProgressBar className='p--1' now={now5} variant="success" label={` ${php} - ${now5}% `} /><br></br>
                            <ProgressBar className='p--1' now={now5} variant="success" label={` ${photoshop} - ${now5}% `} /><br></br>
                         </div>
                         <div className='col-md-6'>
                            <ProgressBar className='p--1' now={now5} variant="success" label={` ${mysql} - ${now5}% `} /><br></br>
                            <ProgressBar className='p--1' now={now4} variant="success" label={` ${nodejs} - ${now4}% `} /><br></br>
                            <ProgressBar className='p--1' now={now4} variant="success" label={` ${expressjs} - ${now4}% `} /><br></br>
                            <ProgressBar className='p--1' now={now4} variant="success" label={` ${mongodb} - ${now4}% `} /><br></br>
                            <ProgressBar className='p--1' now={now4} variant="success" label={` ${python} - ${now4}% `} /><br></br>
                            <ProgressBar className='p--1' now={now4} variant="success" label={` ${django} - ${now4}% `} /><br></br>
                         </div>
                        
                    </div>
                 </div>
            </section>
        </Element>
     )
}

export default Skills;