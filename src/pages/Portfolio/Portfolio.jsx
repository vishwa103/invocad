
import styles from './Portfolio.module.scss'
import ServiceImage from '../../assets/serviceImage.png';
import PortfolioIcon from '../../assets/rocketIcon.png';

import { FaArrowCircleRight } from 'react-icons/fa'
import PortfolioProducts from '../../data/PortfolioProducts';
import { Link } from 'react-router-dom';
const Portfolio = () => {
    return (
        <div className={styles.portfolio}>
            <div className={styles.heroContainer}>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2 className={styles.ServiceTitle}>
                            <span style={{ color: "var(--primary-color)" }}>Precision. Innovation.</span> Excellence in Design
                        </h2>
                    </div>
                    <div className='col-md-6'>
                        <img src={ServiceImage} width="100%" height="100%" />
                    </div>
                </div>

                <div className='d-flex flex-wrap justify-content-between gap-5'>
                    <p>
                        Explore how Invocad transforms ideas into exceptional products <br />
                        through world-class engineering and design expertise.
                    </p>
                    <button className={styles.herobutton}>
                        Learn more <FaArrowCircleRight className={styles.icon} size={40} />
                    </button>
                </div>
            </div>

            <div className='container mt-5'>
                <h2 className={styles.portfolioTitle}>
                    <img src={PortfolioIcon} width={40} height={40}/>
                    Case Study
                </h2>
                <h3 className={styles.portfolioSubtitle}>Featured Products </h3>
                <p className={styles.portfolioDescription}>Our latest innovations in industrial automation and smart solutions.</p>
                <div className='row'>
                    {PortfolioProducts.map((product, index) => (
                        <Link className='col-md-6'
                       
                        key={index} to={`/portfolio/${product.id}`} style={{ textDecoration: 'none' }}>
                        
                            <div className={styles.productCard}>
                                <img src={product.image} alt={product.title} className={styles.productImage} />
                                <div className='d-flex justify-content-between align-items-center'>
                                <h3 className={styles.productTitle}>{product.title}</h3>
                                <FaArrowCircleRight className={styles.icon} size={38} />
                                </div>
                            </div>
                       
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio
