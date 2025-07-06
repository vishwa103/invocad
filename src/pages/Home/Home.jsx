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

  {/* Team Profiles */}
  <div className="row mt-5">
    {/* GOKUL */}
    <div className="col-md-4 mb-4">
      <div className={styles.profileCard}>
        <div className={styles.initialCircle}>G</div>
        <h3 className={styles.profileName}>GOKUL</h3>
        <p className={styles.profileRole}>FOUNDATION and DESIGN ENGINEER</p>
      </div>
    </div>

    {/* ARUN */}
    <div className="col-md-4 mb-4">
      <div className={styles.profileCard}>
        <div className={styles.initialCircle}>A</div>
        <h3 className={styles.profileName}>ARUN</h3>
        <p className={styles.profileRole}>CO-FOUNDER and DESIGN ENGINEER</p>
      </div>
    </div>

    {/* MARIMUTHU */}
    <div className="col-md-4 mb-4">
      <div className={styles.profileCard}>
        <div className={styles.initialCircle}>M</div>
        <h3 className={styles.profileName}>MARIMUTHU</h3>
        <p className={styles.profileRole}>CO-FOUNDER and DESIGN ENGINEER</p>
      </div>
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
                  <h4 className={styles.brandCardTitle}>Design-Led Approach</h4>
                  <p className={styles.brandCardDesc}>We create products that are both functional and beautiful.</p>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-4'>
              <div className={styles.brandCard}>

                <div className='d-flex align-items-center justify-content-center'>
                  <img src={brandImageTwo} className={styles.brandImage} />
                </div>
                <div>
                  <h4 className={styles.brandCardTitle}>Engineering Expertise</h4>
                  <p className={styles.brandCardDesc}>Every design is built for real-world performance. </p>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-4'>
              <div className={styles.brandCard}>
                <div className='d-flex align-items-center justify-content-center'>
                  <img src={brandImageThree} className={styles.brandImage} />
                </div>
                <div>
                  <h4 className={styles.brandCardTitle}>Precision-Driven Delivery</h4>
                  <p className={styles.brandCardDesc}>Attention to detail, Perfection in
                    Execution.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <ServiceSection />

    </div>
  )
}

export default Home
