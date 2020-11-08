import React from 'react'
import PageLinks from '../constants/links'
import { Link } from 'gatsby'
import style from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={style.nav}>
            <div>
                <Link className={style.brand} to='/'>
                    <span className={style.logo}>JC</span>
                    <span className={style.name}>Jackson Chen</span>
                </Link>
                
            </div>
            <ul className={style.ul}>
                <PageLinks />
            </ul>
        </nav>
    )
}