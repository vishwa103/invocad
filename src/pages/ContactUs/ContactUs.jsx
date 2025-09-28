import React, { useRef, useState } from 'react';
import styles from './ContactUs.module.scss';
import HeroImage from '../../assets/ContactImage.png';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const formRef = useRef();
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');




    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log("SERVICE ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
        // console.log("TEMPLATE ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
        // console.log("PUBLIC KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
        // console.log("FORM REF:", formRef.current);
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(
            (result) => {
                setSuccessMsg('✅ Message sent successfully!');
                setErrorMsg('');
                formRef.current.reset();
            },
            (error) => {
                setErrorMsg('❌ Failed to send message. Please try again later.');
                setSuccessMsg('');
                console.error('EmailJS Error:', error?.text);
            }
        );
    };



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
                                <p className={styles.formDesc}>
                                    Our team is ready to assist you with your design and engineering needs. Fill out the form or connect with us directly — let’s bring your ideas to life with precision and innovation.
                                </p>
                            </div>
                        </div>

                        <div className={styles.line} />

                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='py-5'>
                                    <h3 className={styles.contactTitle}>Email</h3>
                                    <p className={styles.contactInfo}>
                                        <a href="mailto:contactinvocad@gmail.com" className={styles.contactLink}>contactinvocad@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='py-5'>
                                    <h3 className={styles.contactTitle}>Mobile</h3>
                                    <p className={styles.contactInfo}>+91 6369727885</p>
                                </div>
                            </div>
                        </div>
                        <form ref={formRef} onSubmit={handleSubmit} className={styles.contactForm}>
                            <h3 className={styles.contactFormTitle}>Book a Free Consultation</h3>
                            <p className={styles.contactFormDesc}>
                                Reach out today and take the first step towards an unforgettable experience.
                            </p>

                            <div className='row'>
                                <div className='col-md-6'>
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="Name"
                                        className={styles.inputField}
                                        required
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="Email"
                                        className={styles.inputField}
                                        required
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <input
                                        type="text"
                                        name="user_phone"
                                        placeholder="Phone Number"
                                        className={styles.inputField}
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company Name"
                                        className={styles.inputField}
                                    />
                                </div>
                                <div className='col-md-12'>
                                    <textarea
                                        name="message"
                                        placeholder="How can we help you?"
                                        className={styles.inputField}
                                        rows="4"
                                        required
                                    ></textarea>
                                </div>
                                <div className='col-md-12'>
                                    <button type="submit" className={styles.submitButton}>
                                        Send Message
                                    </button>
                                </div>
                                <div className='col-md-12 mt-3'>
                                    {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
                                    {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
                                </div>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
