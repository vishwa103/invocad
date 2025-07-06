import React from 'react'
import styles from './Footer.module.scss'
import logo from '../../assets/logo/invoCAD LOGO.png'
import footerTitle from '../../assets/INVOCAD.png'
import { Link } from 'react-router-dom'

const productDesignLinks = [
    { name: 'Product Design', path: '/' },
    { name: 'Manufacturing Design', path: '/' },
    { name: 'Functional Drawings', path: '/' },
    { name: '2D Drafting', path: '/' },
    { name: 'Automotive Design', path: '/' },
];

const mainMenuLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
];

const otherLinks = [
    { name: 'Blog', path: '/' },
    { name: 'FAQs', path: '/' },
    { name: 'Partner with Us', path: '/' },
];


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className='row'>
                <div className='col-md-6'>

                    <div className={styles.logoContainer}>
                        <img src={logo} className={styles.logo} alt="Logo" />
                    </div>
                    <p className={styles.footerText}>Start Designing Your Next Big Innovation Today</p>
                </div>
                <div className='col-md-6'>
                    <div className="row">
                        {/* <div className="col-lg-5 col-md-6">
                            <div className={styles.footerLinks}>
                                {productDesignLinks.map((link, index) => (
                                    <Link key={index} to={link.path} className={styles.footerLink}>
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div> */}

                        <div className="col-lg-6 col-md-6">
                            <div className={styles.footerLinks}>
                                {mainMenuLinks.map((link, index) => (
                                    <Link key={index} to={link.path} className={styles.footerLink}>
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className={styles.footerLinks}>
                                {otherLinks.map((link, index) => (
                                    <Link key={index} to={link.path} className={styles.footerLink}>
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-100 d-flex align-items-center justify-content-center'>
                <img src={footerTitle} className={styles.footerTitleImage} width="100vw" height="auto" />
            </div>

            <div className='d-flex gap-5 justify-content-between mt-4'>
                <span>© 2025 INVOCAD. All rights reserved.</span>
                <div className='d-flex gap-5'>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
