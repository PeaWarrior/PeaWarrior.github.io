import React from 'react'
import { Link } from 'gatsby'
import style from './links.module.css'

const data = [
    {
        id: 1,
        text: 'home',
        url: '/'
    },
    {
        id: 2,
        text: 'about',
        url: '/about'
    },
    {
        id: 3,
        text: 'projects',
        url: '/projects'
    },
    {
        id: 4,
        text: 'blog',
        url: '/blog'
    },
    {
        id: 5,
        text: 'contact',
        url: '/contact'
    },
]

export default function PageLinks() {
    let links = data.map(link => (
        <li key={link.id}>
            <Link 
            className={style.link}
            to={link.url}>
                {link.text}
            </Link>
        </li>
    ))

    return (
        <ul className={style.links}>
            {links}
        </ul>
    )
}