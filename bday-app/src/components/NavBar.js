import React from 'react';

function NavBar() {
    return (
        <nav>
            <figure id="pokeball">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg" alt="half red half white ball"></img>
            </figure>
            <ul className="navbar">
                <li>Home</li>
                <li>About</li>
                <li>Reservations</li>
                <li>Contact</li>
            </ul>
        </ nav>
    )
}

export default NavBar;