import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="nav justify-content-center p-3 mb-2 shadow">
                <Link className="btn btn-outline-dark mx-2" to="/">Home</Link>
                <Link className="btn btn-outline-dark mx-2" to="/films">Films</Link>
                <Link className="btn btn-outline-dark mx-2 " to="/people">People</Link>
            </nav>
        </div>
    )
}

export default NavBar

// Link is still just html so we can style them 