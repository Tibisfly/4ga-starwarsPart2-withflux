import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-light">
            <Link className="navbar-brand" to="/">
                <img src="https://clipart.info/images/ccovers/1513370389Star%20Wars%20Logo%20transparent%20PNG.png" width="110" height="80" alt="la mejor pagina de starwars"/>
            </Link>
            <Link to="/contact"><button type="button" class="btn btn-primary">Favorites</button></Link>
            </nav>
        </div>
       
    )
}