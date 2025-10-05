import React, { useRef, useState } from 'react';
import styles from './ContactUs.module.scss';
import HeroImage from '../../assets/ContactImage.png';
import emailjs from '@emailjs/browser';
import Select from "react-select";

const serviceOptions = [
  { value: "Product Design", label: "Product Design" },
  { value: "Manufacturing design", label: "Manufacturing design" },
  { value: "Drafting", label: "Drafting" },
  { value: "Reverse Engineering", label: "Reverse Engineering" },
  { value: "2d Migration", label: "2d Migration" },
  { value: "Mechanism", label: "Mechanism" },
  { value: "Simulation", label: "Simulation" },
  { value: "Rendering", label: "Rendering" },
  { value: "Auto cad nesting", label: "Auto cad nesting" },
  { value: "Concept Design", label: "Concept Design" }
];


const ContactUs = () => {
    const formRef = useRef();
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedServices, setSelectedServices] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const selectedValues = selectedServices.map(s => s.value).join(", ");


        // ✅ Create a FormData object manually
        const formData = new FormData(formRef.current);
        formData.append("services_list", selectedValues); // New key for EmailJS

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            Object.fromEntries(formData),
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(
            (result) => {
                setSuccessMsg('✅ Message sent successfully!');
                setErrorMsg('');
                formRef.current.reset();
                setLoading(false);
            },
            (error) => {
                setErrorMsg('❌ Failed to send message. Please try again later.');
                setSuccessMsg('');
                console.error('EmailJS Error:', error?.text);
                setLoading(false);
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
                                    <p className={styles.contactInfo}>+91 7812883741</p>
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
                                <div className="col-md-12">
                                    <Select
                                        isMulti
                                        name="services"
                                        options={serviceOptions}
                                        value={selectedServices}
                                        onChange={(selected) => setSelectedServices(selected)}
                                        placeholder="Select Services"
                                        classNamePrefix="select"
                                        className={styles.inputField}

                                        styles={{
                                            control: (base) => ({
                                                ...base,
                                                border: "none",       // Remove border
                                                boxShadow: "none",    // Remove blue focus outline
                                                background: "transparent", // Optional - matches your input style
                                            }),
                                            multiValue: (base) => ({
                                                ...base,
                                                background: "#eee",   // Optional: tag style
                                            }),
                                            multiValueLabel: (base) => ({
                                                ...base,
                                                color: "#333",
                                            }),
                                            multiValueRemove: (base) => ({
                                                ...base,
                                                ':hover': { backgroundColor: "red", color: "white" }
                                            })
                                        }}
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
                                    <button
                                        type="submit"
                                        className={styles.submitButton}
                                        disabled={loading}
                                    >
                                        {loading ? 'Sending...' : 'Send Message'}
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
