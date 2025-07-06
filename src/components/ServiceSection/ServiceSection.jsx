
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import styles from './ServiceSection.module.scss'
import lightingIcon from '../../assets/lightingIcon.png'
import serviceImageOne from '../../assets/serviceImageOne.png'
import serviceImageTwo from '../../assets/serviceImageTwo.png'
import serviceImageThree from '../../assets/serviceImageThree.png'
import serviceImageFour from '../../assets/serviceImageFour.png'
import serviceImageFive from '../../assets/serviceImageFive.png'
import { useState } from 'react'

const services = [
  {
    title: 'Product Design',
    description: 'Innovative product solutions designed for performance, manufacturability, and success.',
    image: serviceImageOne,
    bullets: [
      'Concept development from idea to working design.',
      'User-centric approach focusing on functionality and aesthetics.',
      'Ready-for-manufacturing designs with complete technical documentation.',
    ]
  },
  {
    title: 'Automotive Design',
    description: 'Precision and performance-driven automotive systems tailored for reliability.',
    image: serviceImageTwo,
    bullets: [
      'Aerodynamic styling and functional efficiency.',
      'Ergonomic interiors and user experience optimization.',
      'Comprehensive vehicle system integration.',
    ]
  },
  {
    title: '2D Drafting & Detailing',
    description: 'Accurate 2D drawings that meet industry standards for manufacturing and compliance.',
    image: serviceImageThree,
    bullets: [
      'Precise technical drawings for engineering and construction.',
      'Layered CAD files compatible with industry tools.',
      'Support for revisions and manufacturing annotations.',
    ]
  },
  {
    title: '3D Modeling & Simulation',
    description: 'Create photorealistic 3D models and simulate performance before production.',
    image: serviceImageFour,
    bullets: [
      'Detailed solid and surface modeling using industry tools.',
      'Assembly and motion simulations for real-world scenarios.',
      'Stress and performance analysis (FEA/CFD).',
    ]
  },
  {
    title: 'Prototyping & Testing',
    description: 'Turn concepts into working prototypes for testing, validation, and iteration.',
    image: serviceImageFive,
    bullets: [
      'Rapid prototyping using 3D printing or CNC machining.',
      'Testing against real-world conditions and standards.',
      'Iterative design feedback for production readiness.',
    ]
  },
  {
    title: 'Manufacturing Support',
    description: 'End-to-end assistance in preparing your design for full-scale production.',
    image: serviceImageTwo,
    bullets: [
      'Bill of materials (BOM) preparation.',
      'Material selection and cost optimization.',
      'Liaison with manufacturers and suppliers.',
    ]
  }
];

const ServiceSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedService = services[selectedIndex];
  return (
    <div>
      <div className="my-5 py-5">
        <p className={styles.serviceTitle}><img src={lightingIcon} />Our Services</p>
        <div className='row'>
          <h3 className={`col-md-8 ${styles.serviceSubTitle}`}>
            CUSTOMIZED DESIGN SOLUTION TAILORED FOR YOU
          </h3>
          <p className={`col-md-4 ${styles.serviceDesc}`}>
            Custom design solutions powered by CAD blend precision with creativity, crafting one-of-a-kind digital models tailored to your vision. Engineered for excellence, each design turns complex ideas into sleek, production-ready realities.
          </p>
        </div>

        <div className='my-5'>
          <div className={styles.serviceContainer}>
            <div className='row'>
              <div className='col-md-5'>
                <div className='d-flex flex-column justify-content-between h-100 gap-5'>
                  <div>
                    <h3 className={styles.serviceContentTitle}>{selectedService.title}</h3>
                    <p className={styles.serviceContentDesc}>{selectedService.description}</p>
                  </div>
                  <button className={styles.serviceButton}>
                    Explore & Learn More <IoArrowForwardCircleOutline size={32} />
                  </button>
                </div>
              </div>

              <div className='col-md-3'>
                <div className={styles.imageWrapper}>
                  <img src={selectedService.image} alt={selectedService.title} />
                </div>
              </div>

              <div className='col-md-4 d-flex flex-column gap-3 justify-content-end'>
                {selectedService.bullets.map((item, idx) => (
                  <span key={idx} className={styles.serviceListItem}>{item}</span>
                ))}
              </div>
            </div>

            <div className='d-flex flex-wrap gap-3 mt-4'>
              {services.map((service, index) => (
                <button
                  key={index}
                  className={`${styles.serviceTabButton} ${selectedIndex === index ? styles.active : ''}`}
                  onClick={() => setSelectedIndex(index)}
                >
                  {service.title}
                </button>
              ))}
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}

export default ServiceSection
