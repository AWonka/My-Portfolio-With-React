import React from 'react';
// import { Link } from 'react-router-dom';

function Navbar() {
    // const [click, setClick] = useState();

    // const handleClick = () => setClick(!click)

    return (
        <div className="col-6 text-center">
            <a className="headers-links" href="#about-me">
            <h2 className="headers text-white">About Me</h2>
            </a>
            <a className="headers-links" href="#my-work">
            <h2 className="headers text-white">My Work</h2>
            </a>
            <a className="headers-links" href="#contact-me">
            <h2 className="headers text-white">Contact Me</h2>
            </a>
        </div>
    )
}

export default Navbar;