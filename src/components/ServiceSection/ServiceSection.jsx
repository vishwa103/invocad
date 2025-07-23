
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
    description: 'Product design is the art of turning ideas into functional, user-focused creations that blend form and purpose. It shapes innovation through thoughtful aesthetics, smart engineering, and real-world impact.',
    image: serviceImageOne,
    bullets: [
      'Product design focuses on creativity and innovation. ',
      'It ensures the product is functional and user-friendly.',
      'It improves the appearance and overall user experience.',
    ]
  },
  {
    title: 'Manufacturing design',
    description: 'Manufacturing design bridges concept and production, optimizing products for efficient, scalable, and cost-effective fabrication.It ensures every design detail aligns with real-world materials, machines, and manufacturing processes.',
    image: serviceImageTwo,
    bullets: [
      'Manufacturing design focuses on efficient production.',
      'It aims to reduce cost and material wastage.',
      'It ensures the product is easy to manufacture and assemble.',
    ]
  },
  {
    title: 'Drafting',
    description: 'CAD 2D Drawing delivers precise, detailed technical layouts essential for engineering, architecture, and manufacturing.It simplifies complex designs into accurate plans, sections, and elevations. Ideal for documentation, fabrication, and seamless project coordination.',
    image: serviceImageThree,
    bullets: [
      'Drafting is the process of creating detailed technical drawings.',
      'It helps communicate design ideas clearly and accurately.',
      'It serves as a guide for manufacturing and construction.',
    ]
  },
  {
    title: 'Reverse Engineering',
    description: 'CAD Reverse Engineering transforms physical objects into precise digital models through advanced scanning and reconstruction.It enables redesign, analysis, or reproduction of legacy parts without original drawings.Ideal for product improvement, restoration, and innovation based on existing designs',
    image: serviceImageFour,
    bullets: [
      'Reverse engineering is the process of analyzing existing products.',
      'It helps to understand the design, materials, and functionality.',
      'It is used for improvement, reproduction, or innovation. ',
    ]
  },
  {
    title: '2d Migration',
    description: 'Migrating your legacy 2D CAD files to modern platforms can significantly improve your design accuracy, efficiency, and compatibility.',
    image: serviceImageFive,
    bullets: [
      '2D migration involves converting old manual drawings into digital formats.',
      'It helps improve accuracy and easy modifications in CAD software.',
      'It is used to modernize and standardize legacy design data.',
    ]
  },
  {
    title: 'Mechanism',
    description: 'CAD Animation turns design concepts into engaging, moving visuals that reveal how components work together.It enhances understanding by illustrating intricate mechanisms and assembly sequences.',
    image: serviceImageTwo,
    bullets: [
      'A mechanism is a system of parts designed to transmit motion or force.',
      'It converts input energy into a desired output movement.',
      'It is commonly used in machines to achieve specific functions.',
    ]
  },
  {
    title: 'Simulation',
    description: 'CAD Simulation brings virtual prototypes to life by testing real-world performance within a digital environment.It analyzes stress, motion, heat, and fluid flow to optimize designs before production.Essential for reducing costs, improving reliability, and accelerating innovation.',
    image: serviceImageTwo,
    bullets: [
      'Simulation is used to replicate real-world conditions in a virtual environment.',
      'It helps to predict product performance and behavior.',
      'It reduces the need for physical testing and saves time and cost.',
    ]
  },
  {
    title: 'Rendering',
    description: 'CAD Rendering converts technical 3D models into lifelike visuals with realistic lighting, textures, and materials.It helps visualize products and spaces before production or construction begins.Perfect for presentations, marketing, and client approvals with a photorealistic edge.',
    image: serviceImageTwo,
    bullets: [
      'Rendering is the process of creating realistic images from 3D models.',
      'It helps visualize the appearance of products before manufacturing.',
      'It is used for presentations, marketing, and design validation.',
    ]
  },
  {
    title: 'Auto cad nesting',
    description: 'We specialize in high-precision laser cutting paired with advanced sheet metal nesting solutions to maximize material efficiency and reduce production costs.',
    image: serviceImageTwo,
    bullets: [
      'AutoCAD nesting is used to arrange multiple parts efficiently on a sheet.',
      'It helps reduce material waste and optimize cutting processes.',
      'It is widely used in sheet metal, woodworking, and fabrication industries.',
    ]
  },
  {
    title: 'Concept Design  ',
    description: `Concept design is the foundation of innovation, where abstract ideas take visual form. It explores possibilities, defines directions, and sets the stage for the product's design journey. Through sketches, mood boards, and 3D concepts, it captures the essence of functionality, style, and purpose.`,    image: serviceImageTwo,
    bullets: [
      'Translate raw ideas into visual and functional directions.',
      'Explore multiple possibilities before finalizing the approach.',
      'Set the tone for engineering, aesthetics, and market alignment.',
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
                  {/* <button className={styles.serviceButton}>
                    Explore & Learn More <IoArrowForwardCircleOutline size={32} />
                  </button> */}
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
