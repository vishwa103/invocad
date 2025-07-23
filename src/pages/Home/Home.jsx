import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import heroImage from '../../assets/hero 1.png'
import { FaArrowCircleRight } from 'react-icons/fa'
import starsIcon from '../../assets/starsIcon.png'
import rocketIcon from '../../assets/rocketIcon.png'
import brandImageOne from '../../assets/brands/CAD.png'
import brandImageTwo from '../../assets/brands/CAM.png'
import brandImageThree from '../../assets/brands/CAE.png'
import ServiceSection from '../../components/ServiceSection/ServiceSection'
import { Link, useLocation } from 'react-router-dom'
import Faq from '../../components/Faq/Faq'
import bannerImage from '../../assets/bannerImage.jpg'
import { FaWhatsapp } from "react-icons/fa";


const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const targetElement = document.getElementById(elementId);

      if (targetElement) {
        setTimeout(() => { // Optional delay to ensure rendering
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className={styles.home}>
      <div className={styles.heroContainer}>

        <h1 className={styles.heroTitle}>Engineering Tomorrow's Products,</h1>

        <div className={styles.imageContainer}>
          <h2 className={styles.imageTextOne}>Today</h2>
          <img src={heroImage} className={styles.heroImage} />
          <h2 className={styles.imageTextTwo}>Today</h2>
        </div>

        <div className='d-flex flex-wrap justify-content-between gap-5 align-items-center mt-5 pt-5'>
          <p >At Invocad, we transform ideas into cutting-edge products <br />through precision design and advanced engineering.</p>
        </div>
      </div>

      <section className="my-5 py-5" id='about'>
        <p className={`${styles.aboutTitle} mt-5`}>
          <img src={starsIcon} alt="stars" /> Who We Are
        </p>
        <p className='text-center'>We’re building more than designs — we’re building the future.</p><br />
        <p className={styles.aboutDesc}>
          At Invocad, we bring ideas to life through intelligent design, precise engineering, and a deep understanding of modern manufacturing needs.
        </p>
        <p className={styles.aboutDesc}>
          We are a design-led firm specializing in Product Design, Manufacturing Design, Reverse Engineering, AutoCAD Nesting, 2D to 3D Migration, CAM, Simulation, Concept Design, and Research & Development (R&D).
        </p>
        <p className={styles.aboutDesc}>
          Our team is proficient in leading industry tools like SolidWorks, CATIA, Creo, and AutoCAD, enabling us to deliver engineering solutions that are both innovative and manufacturing-ready.
        </p>
        <p className={styles.aboutDesc}>
          We follow a step-by-step structured approach, from initial idea to final prototype, ensuring clarity, accuracy, and performance at every stage.
        </p>
        <p className={styles.aboutDesc}>
          Whether you're a startup bringing your product to life or a large manufacturer optimizing your workflows — Invocad is your trusted engineering partner.
        </p>
        <div className='d-flex  flex-column mt-5'>
          <div className={`${styles.aboutCard} bg-white`}>
            <h3 className={`${styles.aboutCardTitle} `} >Our Mission</h3>
            <p className=''>
              At Invocad, we exist to transform raw ideas into real world products through intelligent design and precision engineering. Our mission is to bridge imagination and industry crafting every line, curve, and component with purpose. With deep expertise in CAD tools and manufacturing design, we partner with visionaries to bring innovation to life faster, smarter, and with unmatched clarity.</p>
          </div>
          <div className={`${styles.aboutCard} bg-white`}>
            <h3 className={styles.aboutCardTitle}>Our Vission</h3>
            <p className=''>To be a driving force in the future of product design where creativity meets engineering, and every idea finds its form.
              <br />At Invocad, we envision a world where design is not a service, but a catalyst for innovation, impact, and growth.
              <br />We aim to become a trusted partner for inventors, startups, and industries known not just for our precision, but for the passion we pour into every project.
            </p>
          </div>
        </div>
      </section>



      <div className='my-5 py-5'>
        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <div className={styles.aboutCard}>
              <h3 className={styles.aboutCardTitle}>Innovation at Core</h3>
              <p className={styles.aboutCardDesc}>We don't just follow trends — we set them. At Invocad, innovation drives everything we do, from first sketch to final product.</p>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className={styles.aboutCard}>
              <h3 className={styles.aboutCardTitle}>Precision Engineering</h3>
              <p className={styles.aboutCardDesc}>
                Design without precision is just imagination. Our designs are engineered for real-world performance, manufacturability, and longevity.
              </p>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className={styles.aboutCard}>
              <h3 className={styles.aboutCardTitle}>End-to-End Expertise</h3>
              <p className={styles.aboutCardDesc}>
                Invocad partners with you at every step — ideation, design, drafting, prototyping, and production — ensuring seamless project delivery.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className='my-5 py-5'>
        <p className={`${styles.brandTitle} mb-3`}><img src={rocketIcon} />Why Choose Us</p>
        <div className='row d-flex flex-wrap justify-content-center align-items-center'>
          <div className='col-lg-4 col-md-6'>
            <div className={styles.aboutCard}>
              <h3 className={styles.aboutCardTitle}>Research & Development (R&D)</h3>
              <p className={styles.aboutCardDesc}>
                We help you explore, test, and validate new ideas with a strong R&D foundation to drive innovation.
              </p>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className={styles.aboutCard}>
              <h3 className={styles.aboutCardTitle}>Concept to Reality</h3>
              <p className={styles.aboutCardDesc}>
                Starting from rough sketches or just an idea, we transform early concepts into detailed, actionable designs.
              </p>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className={styles.aboutCard}>
              <h3 className={styles.aboutCardTitle}>End-to-End Engineering Services</h3>
              <p className={styles.aboutCardDesc}>
                From ideation to prototyping and production, we handle every phase of the product lifecycle.
              </p>
            </div>
          </div>


          <div className='col-lg-4 col-md-6'>
            <div className={styles.aboutCard}>
              <h3 className={styles.aboutCardTitle}>Tailored Design Solutions</h3>
              <p className={styles.aboutCardDesc}>
                Every project is unique. Our solutions are fully customized to your industry, goals, and technical needs.
              </p>
            </div>
          </div>


          <div className='col-lg-4 col-md-6'>
            <div className={styles.aboutCard}>
              <h3 className={styles.aboutCardTitle}>Client-Centric Approach</h3>
              <p className={styles.aboutCardDesc}>
                We believe in collaboration, clear communication, and aligning with your business vision.
              </p>
            </div>
          </div>


          <div className='col-lg-4 col-md-6'>
            <div className={styles.aboutCard}>
              <h3 className={styles.aboutCardTitle}>Commitment to Quality</h3>
              <p className={styles.aboutCardDesc}>
                Precision, performance, and attention to detail define our work.
              </p>

            </div>
          </div>


          <div className='col-lg-4 col-md-6'>
            <div className={styles.aboutCard}>
              <h3 className={styles.aboutCardTitle}>Cross-Industry Expertise</h3>
              <p className={styles.aboutCardDesc}>
                We proudly serve clients across automotive, aerospace, consumer goods, industrial machinery, and more.
              </p>
            </div>
          </div>
        </div>

        <div className='row mt-5'>
          <h3 className={`col-md-8 ${styles.brandSubTitle}`}>Where INVOCAD add's value</h3>
          <p className={`col-md-4 ${styles.brandDesc}`}>With a commitment to innovation, accuracy, and seamless collaboration, we turn your vision into production-ready reality.</p>
        </div>

        <div className='my-5'>
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-md-6 col-lg-4  mb-2'>
              <div className={styles.brandCard}>

                <div className='d-flex align-items-center justify-content-center'>
                  <img src={brandImageOne} className={styles.brandImage} />
                </div>
                <div>
                  <div className='d-flex flex-column flex-wrap justify'>
                    <h4 className={styles.brandCardTitle}>CAD</h4>
                    <span className='text-center'>(Computer Aided Designing)</span><br />
                  </div>
                  <p className={styles.brandCardDesc}>
                    CAD is a computer software used to create drawings and models of things like machines, buildings, and products. It helps people design in 2D (flat drawings) or 3D (models that look real). CAD makes it easy to see, change, and improve designs before making them in real life.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-4 mb-2'>
              <div className={styles.brandCard}>

                <div className='d-flex align-items-center justify-content-center'>
                  <img src={brandImageTwo} className={styles.brandImage} />
                </div>
                <div>
                  <div className='d-flex flex-column flex-wrap justify'>
                    <h4 className={styles.brandCardTitle}>CAM </h4>
                    <span className='text-center'>(Computer Aided Manufacturing)</span><br />
                  </div>
                  <p className={styles.brandCardDesc}>
                    CAM refers to software and processes that help turn CAD designs into real, manufacturable products. At Invocad, we support and assist in the manufacturing process by preparing accurate, production-ready designs for CNC machining, milling, and other automated operations.
                    <br /><br /> While we do not write G-code or M-code directly, we collaborate with machine operators and manufacturers to ensure the design is optimized for production. Our role is to make the manufacturing phase easier, faster, and more precise by bridging the gap between digital design and physical product.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-4  mb-2'>
              <div className={styles.brandCard}>
                <div className='d-flex align-items-center justify-content-center'>
                  <img src={brandImageThree} className={styles.brandImage} />
                </div>
                <div>
                  <div className='d-flex flex-column flex-wrap justify'>
                    <h4 className={styles.brandCardTitle}>CAE </h4>
                    <span className='text-center'>(Computer Aided Engineering)</span><br />
                  </div>
                  <p className={styles.brandCardDesc}>
                    CAE is a computer software used to check if a design will work properly before making it in real life. It helps engineers test things like strength, heat, movement, and other physical effects on a product using a computer. CAE saves time and money by finding problems early.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className=' d-flex flex-column align-items-center justify-content-center'> 
          <button className={styles.herobutton}>Explore Our Services <FaArrowCircleRight className={styles.icon} size={40} /></button>
</div>
      <div className="row mt-5">
        <div className={styles.contactBanner}>
          <img src={bannerImage} alt="Contact Us Hero" width="100%" className={styles.contactBannerImage} />

          <div className={styles.contactBannerContent}>
            <div className='row'>
              <div className='col-md-7'>
                <h2 className={styles.contactBannerTitle}>
                  Let’s Build Something Extraordinary Together
                </h2>
              </div>
              <div className='col-md-5 d-flex align-items-center justify-content-center'>
                <p className={styles.contactBannerDesc}>
                  Have a concept in mind? Our expert team is ready to bring your ideas to life with precision and innovation.
                  <br /><br />Connect with us today to kickstart your project.
                </p>
              </div>
            </div>
            <div className='row w-100'>
              <div className='col-md-6 mb-2'>
                <a
                  href="https://wa.me/917812883741" // Replace with your actual WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <button className={styles.contactBannerButtonOne}>
                    <FaWhatsapp size={28} /> Chat with Us
                  </button>
                </a>

              </div>
              <div className='col-md-6 mb-2'>
                <Link
                  to="/contact"
                  className="text-decoration-none"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <button className={styles.contactBannerButtonTwo}>
                    Book a free Consultation
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Faq />


    </div>
  )
}

export default Home
