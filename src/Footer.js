import React, { Fragment } from "react";
import './App.css';
import data from './data/Homedata.json'

export default function Footer()
{
    return(
        <>
        <section id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-center">
                            <span className="footer-1">Copyright ©2023 Design and Developed  By <b className="text-danger">Sathish</b></span>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
      </>
    );
}