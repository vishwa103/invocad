
import { useParams } from 'react-router-dom'
import PortfolioProducts from '../../../data/PortfolioProducts';
import styles from './ProductPage.module.scss'
import { useEffect } from 'react';
const ProductPage = () => {
    const { id } = useParams();

    useEffect(() =>
        window.scrollTo({ top: 0, behavior: 'smooth' })
        , []);

    const productDetails = PortfolioProducts.find(item => item.id === Number(id));

    // console.log(PortfolioProducts.filter(item => item.id === id));
    return (
        <div className={`${styles.productPage} container`}>
            <div className={styles.imageContainer}>

                <img src={productDetails?.image} alt={productDetails.title} width="100%" height="100%" />
            </div>
            <div className='mt-5 container'>
                <h1 className={styles.productTitle}>{productDetails?.title}</h1>

                <p className={styles.description} dangerouslySetInnerHTML={{ __html: productDetails?.description }} />
            </div>
        </div>
    )
}

export default ProductPage
