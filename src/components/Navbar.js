import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar