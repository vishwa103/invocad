import React, { useState } from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/logo/invoCAD LOGO.png'
import { Link, NavLink } from 'react-router-dom'
import { IoIosCall } from 'react-icons/io'
import { HiMenuAlt3 } from 'react-icons/hi'
import { FiX } from 'react-icons/fi'

const pageLinks = [
    { link: '/', name: 'Home' },
    { link: '/#about', name: 'About Us' },
    { link: '/services', name: 'Services' },
    // { link: '/portfolio', name: 'Portfolio' },
    // { link: '/resources', name: 'Resources' },
]

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logo} className={styles.logo} alt="Logo" />
            </div>

            <nav className={`${styles.navContainer} ${isMenuOpen ? styles.active : ''}` }>
                {pageLinks.map((item, index) => (
                    <React.Fragment key={index}>
                        {index !== 0 && <div className={styles.borderLine} />}
                        <NavLink
                            to={item.link}
                            className={({ isActive }) =>
                                `${styles.navItem} ${isActive ? styles.active : ''}`
                            }
                        >
                            {item.name}
                        </NavLink>
                        {index !== pageLinks.length - 1 && <div className={styles.borderLine} />}
                    </React.Fragment>
                ))}
            </nav>

            <div className='d-flex gap-2 align-items-center'>
                <Link to='/contact' className='text-decoration-none'> <button className={styles.contactButton} title="Contact our team">
                    <IoIosCall className={styles.icon} />Contact Us
                </button>
                </Link>
                <div className={styles.menuIcon} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FiX size={32} /> : <HiMenuAlt3 size={32} />}
                </div>
            </div>
        </div>
    )
}

export default Header
