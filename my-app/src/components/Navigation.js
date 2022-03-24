import React from 'react';
// import { Link } from 'react-router-dom';

function Navbar() {
    // const [click, setClick] = useState();

    // const handleClick = () => setClick(!click)

    return (
        <div class="col-6 text-center">
            <a class="headers-links" href="#about-me">
            <h2 class="headers text-white">About Me</h2>
            </a>
            <a class="headers-links" href="#my-work">
            <h2 class="headers text-white">My Work</h2>
            </a>
            <a class="headers-links" href="#contact-me">
            <h2 class="headers text-white">Contact Me</h2>
            </a>
        </div>
    )
}

export default Navbar;