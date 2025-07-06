import styles from './ContactUs.module.scss'
import HeroImage from '../../assets/contactImage.png'
const ContactUs = () => {
    return (
        <div className={styles.contactUs}>
            <div className={styles.heroContainer}>
                <img src={HeroImage} alt="Contact Us Hero" width="100%" className={styles.HeroImage} />
                <h2 className={styles.heroText}>
                    Let’s Build the Future Together
                </h2>
            </div>
            <div className='my-5 py-5'>
                <div className={styles.contactFormContainer}>
                    <div className={styles.formWrapper}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h3 className={styles.formTitle}>Contact Us</h3>
                            </div>
                            <div className='col-md-6'>
                                <p className={styles.formDesc}>Our team is ready to assist you with your design and engineering needs. Fill out the form or connect with us directly — let’s bring your ideas to life with precision and innovation.</p>
                            </div>
                        </div>

                        <div className={styles.line} />

                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='py-5'>
                                    <h3 className={styles.contactTitle}>Email</h3>
                                    <p className={styles.contactInfo}>
                                        <a href="mailto:info@invocad.in" className={styles.contactLink}>info@invocad.in</a>
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                 <div className='py-5'>
                                    <h3 className={styles.contactTitle}>Mobile</h3>
                                    <p className={styles.contactInfo}>
                                    +91 6369727885
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                {/* <div className='py-5'>
                                    <h3 className={styles.contactTitle}>Address</h3>
                                    <p className={styles.contactInfo}>
                                        1234 Design Street, 
                                        Innovation City,
                                        Country, 123456
                                    </p>
                                </div> */}
                            </div>

                        </div>

                        {/* <form className={styles.contactForm}>
                            <h3 className={styles.contactFormTitle}>Book a Free Consultation</h3>
                            <p className={styles.contactFormDesc}>// Reach out today and take the first step towards a unforgettable experience.</p>
                            </form> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
