import React from 'react';
import Navbar from './Navigation';

function Header() {

    return (
        <header class="container-fluid">
            <div class="row">
                <div class="col-6">
                <h1 class="text-white">Wonka</h1>
            </div>
        <Navbar></Navbar>
        </div>
        </header>
    )
}

export default Header;