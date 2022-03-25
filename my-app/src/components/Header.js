import React from 'react';
import Navbar from './Navigation';


function Header() {

    return (
        <header className="container-fluid">
            <div className="row">
                <div className="col-6">
                <h1 className="text-white">Wonka</h1>
            </div>
        <Navbar></Navbar>
        </div>
        </header>
    )
}

export default Header;