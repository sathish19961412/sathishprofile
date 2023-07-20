import {Link} from "react-router-dom";
export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand text-white font-weight-bold" href="#">Sathish Protfolio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
             <li className="nav-item active">
             <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
             </li>
             <li className="nav-item">
             <Link to="/about" className="nav-link">About Us</Link>
             </li>
             <li className="nav-item">
             <Link to="/about" className="nav-link">Projects</Link>
             </li>
             <li className="nav-item">
             <Link to="/about" className="nav-link">Resume</Link>
             </li>
             <li className="nav-item">
             <Link to="/contact" className="nav-link">Contact</Link>
             </li>

        </ul>
        </div>
     </nav>
    )
}