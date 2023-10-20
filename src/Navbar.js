
import {Link,Element} from 'react-scroll';
export default function Navbar(){
    return(
        <header id="fixed">
        <nav className="navbar navbar-expand-lg navbar-light">
        <Element name='home' className="navbar-brand font-weight-bold cssanimation typing"  data-aos="zoom-out" data-aos-easing="linear" data-aos-duration="500" data-aos-once="true">Sathish Portfolio</Element>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
             <li className="nav-item active">
             <Link to="home"  className="nav-link">Home <span className="sr-only">(current)</span></Link>
             </li>
             <li className="nav-item">
             <Link to="about" smooth={true} duration={500} className="nav-link">About Us</Link>
             </li>
             <li className="nav-item">
               <Link to="skils" smooth={true} duration={500} className="nav-link">Skils</Link>
             </li>
             <li className="nav-item">
                <Link to="projects" smooth={true} duration={500} className="nav-link">Projects</Link>
             </li>
             <li className="nav-item">
                <Link to="exp" smooth={true} duration={500} className="nav-link">Experience </Link>
             </li>
             <li className="nav-item">
                <Link to="contact" smooth={true} duration={500} className="nav-link">Contact</Link>
             </li>

        </ul>
        </div>
     </nav>
     </header>
    )
}