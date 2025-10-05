import React, { useEffect, useState } from 'react';
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

    // Intersection Observer for #about section
    useEffect(() => {
        const aboutSection = document.getElementById('about');
        if (!aboutSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsAboutVisible(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.5,
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
                                    onClick={() => {
                                        // Scroll to top only if it's not a hash link
                                        if (!isHashLink) {
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }
                                        setIsMenuOpen(false);
                                    }}
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
                    <NavLink
                        to="/contact"
                        onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-decoration-none">
                        <button className={styles.contactButton} title="Contact our team">
                            <IoIosCall className={styles.icon} />
                            Contact Us
                        </button>
                    </NavLink>
                    <div className={styles.menuIcon} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <FiX size={32} /> : <HiMenuAlt3 size={32} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
