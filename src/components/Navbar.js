
import React from "react"; /*ileride ögrenecegimiz bir amaci var*/ 
import Logo from "../images/logo.svg";


function Navbar(){
    return(
        <nav className="nav">
            <img src={Logo} alt="Meme Logo"/>
            <h1 className="logo-name">Meme Generator</h1>
            <p className="nav-title">React Course - Meme</p>

        </nav>
    )
}

export default Navbar 