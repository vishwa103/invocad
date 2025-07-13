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
import { useLocation } from 'react-router-dom'


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
          <button className={styles.herobutton}>Explore Our Work <FaArrowCircleRight className={styles.icon} size={40} /></button>
        </div>
      </div>

      <section className="my-5 py-5" id='about'>
        <p className={styles.aboutTitle}>
          <img src={starsIcon} alt="stars" /> Who We Are
        </p>
        <p className={styles.aboutDesc}>
          Invocad isn’t just a design studio — it’s where bold ideas meet precision engineering. From the first sketch to the final blueprint, we craft seamless, production-ready solutions that don’t just work — they wow. Fusing artistry with advanced tech, we shape products that look stunning and perform flawlessly
        </p>


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
        <p className={styles.brandTitle}><img src={rocketIcon} />Why Brands Choose Us</p>
        <div className='row'>
          <h3 className={`col-md-8 ${styles.brandSubTitle}`}>What Sets Our Design Solutions Apart</h3>
          <p className={`col-md-4 ${styles.brandDesc}`}>With a commitment to innovation, accuracy, and seamless collaboration, we turn your vision into production-ready reality.</p>
        </div>

        <div className='my-5'>
          <div className='row'>
            <div className='col-md-6 col-lg-4'>
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

            <div className='col-md-6 col-lg-4'>
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
                    CAM is a computer software used to control machines like CNC machines, lathes, and milling machines to make products. It takes the design from CAD and helps create the product automatically with machines. CAM makes manufacturing faster, more accurate, and less manual.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-4'>
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

      <ServiceSection />

      {/* Team Profiles */}
      <div className="row mt-5">
        {/* GOKUL */}
        {/* <div className="col-md-4 mb-4">
          <div className={styles.profileCard}>
            <div className={styles.initialCircle}>G</div>
            <div>
            <h3 className={styles.profileName}>GOKUL</h3>
            <p className={styles.profileRole}>FOUNDER & DESIGN ENGINEER</p>
            </div>
          </div>
        </div> */}

        {/* ARUN */}
        {/* <div className="col-md-4 mb-4">
      <div className={styles.profileCard}>
        <div className={styles.initialCircle}>A</div>
        <h3 className={styles.profileName}>ARUN</h3>
        <p className={styles.profileRole}>CO-FOUNDER and DESIGN ENGINEER</p>
      </div>
    </div> */}

        {/* MARIMUTHU */}
        {/* <div className="col-md-4 mb-4">
          <div className={styles.profileCard}>
            <div className={styles.initialCircle}>M</div>
            <div>
            <h3 className={styles.profileName}>MARIMUTHU</h3>
            <p className={styles.profileRole}>CO-FOUNDER & DESIGN ENGINEER</p>
            </div>

          </div>
        </div> */}
      </div>

    </div>
  )
}

export default Home
