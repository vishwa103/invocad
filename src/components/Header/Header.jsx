import React, { useEffect, useRef, useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/logo/invoCAD LOGO.png';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoIosCall } from 'react-icons/io';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FiX } from 'react-icons/fi';

const pageLinks = [
    { link: '/', name: 'Home' },
    { link: '/#about', name: 'About Us' },
    { link: '/services', name: 'Services' },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const [isAboutVisible, setIsAboutVisible] = useState(false);

    // Intersection Observer for About section
    useEffect(() => {
        const aboutSection = document.getElementById('about');
        if (!aboutSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsAboutVisible(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.5, // 50% of the section must be visible
            }
        );

        observer.observe(aboutSection);
        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logo} className={styles.logo} alt="Logo" />
            </div>

            <div className="d-flex gap-5">
                <nav className={`${styles.navContainer} ${isMenuOpen ? styles.active : ''}`}>
                    {pageLinks.map((item, index) => {
                        const isHashLink = item.link.includes('#');
                        const isAboutLink = item.link === '/#about';

                        const isActiveLink = () => {
                            if (isAboutLink) return isAboutVisible;
                            if (item.link === '/') return location.pathname === '/';
                            return location.pathname === item.link;
                        };

                        return (
                            <React.Fragment key={index}>
                                {index !== 0 && <div className={styles.borderLine} />}
                                <NavLink
                                    to={item.link}
                                    className={() =>
                                        `${styles.navItem} ${isActiveLink() ? styles.active : ''}`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                                {index !== pageLinks.length - 1 && <div className={styles.borderLine} />}
                            </React.Fragment>
                        );
                    })}
                </nav>

                <div className="d-flex gap-2 align-items-center">
                    <Link to="/contact" className="text-decoration-none">
                        <button className={styles.contactButton} title="Contact our team">
                            <IoIosCall className={styles.icon} />
                            Contact Us
                        </button>
                    </Link>
                    <div className={styles.menuIcon} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <FiX size={32} /> : <HiMenuAlt3 size={32} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
