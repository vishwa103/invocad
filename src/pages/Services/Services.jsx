import styles from './Services.module.scss';
import ServiceImage from '../../assets/serviceImage.png';
import { FaArrowCircleRight } from 'react-icons/fa';

import brandImageOne from '../../assets/brands/CAD.png'
import brandImageTwo from '../../assets/brands/CAM.png'
import brandImageThree from '../../assets/brands/CAE.png'
import rocketIcon from '../../assets/rocketIcon.png';
import DiscoverIcon from '../../assets/discoverIcon.png';
import ContainerIcon from '../../assets/ContainerIcon.png';
import ContainerOutlineIcon from '../../assets/ContainerOutlineIcon.png';
import ArrowClickIcon from '../../assets/ArrowClickIcon.png';
import SendIcon from '../../assets/SendIcon.png';
import ServiceSection from '../../components/ServiceSection/ServiceSection';

const Services = () => {

    const stepsData = [
        {
            title: "Discovery & Research",
            description: "Understanding user needs, market trends, and technical requirements.",
            icon: DiscoverIcon
        },
        {
            title: "Concept Development",
            description: "Generating multiple design concepts with sketches, moodboards, and rough models.",
            icon: ContainerIcon
        },
        {
            title: "Detailed 3D Modeling",
            description: "Developing high-fidelity CAD models using SolidWorks, CATIA, or Creo.",
            icon: ContainerOutlineIcon
        },
        {
            title: "Prototyping & Testing",
            description: "Creating physical or digital prototypes for real-world testing and validation.",
            icon: ArrowClickIcon
        },
        {
            title: "Final Design Optimization",
            description: "Fine-tuning for manufacturability, functionality, and aesthetics before handover.",
            icon: SendIcon
        }
    ];

    const brandData = [
        {
            title: "Design-Led Approach",
            description: "We create products that are both functional and beautiful.",
            image: brandImageOne
        },
        {
            title: "Engineering Expertise",
            description: "Every design is built for real-world performance.",
            image: brandImageTwo
        },
        {
            title: "Precision-Driven Delivery",
            description: "Attention to detail, Perfection in Execution.",
            image: brandImageThree
        }
    ];

    const deliverablesData = [
        {
            title: "3D CAD Models",
            description: "Highly detailed, production-ready 3D files."
        },
        {
            title: "Concept Sketches",
            description: "Creative visualization of early ideas and directions."
        },
        {
            title: "Engineering Drawings",
            description: "Complete manufacturing drawings with dimensions and tolerances."
        },
        {
            title: "Prototypes",
            description: "Physical or digital prototypes for design validation."
        },
        {
            title: "Design Specifications",
            description: "Comprehensive documentation for production and marketing."
        },
        {
            title: "And A Lot More...",
            description: "",
            isSubtitle: true
        }
    ];

    return (
        <div className={styles.services}>
            {/* Hero Section */}
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

            {/* Why Choose Invocad */}
            <div className='my-5 py-5'>
                <p className={styles.brandTitle}><img src={rocketIcon} />Why Choose Invocad for Product Design?</p>
                <div className='row'>
                    <h3 className={`col-md-8 ${styles.subTitle}`}>Where Vision Meets Precision...</h3>
                    <p className={`col-md-4 ${styles.brandDesc}`}>
                        Whether you’re launching a new product or refining an existing one, we turn your concept into reality with precision and purpose.
                    </p>
                </div>

                <div className='my-5'>
                    <div className='row'>
                        {brandData.map((brand, index) => (
                            <div key={index} className='col-md-6 col-lg-4'>
                                <div className={styles.brandCard}>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <img src={brand.image} className={styles.brandImage} />
                                    </div>
                                    <div>
                                        <h4 className={styles.brandCardTitle}>{brand.title}</h4>
                                        <p className={styles.brandCardDesc}>{brand.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Step-by-Step Approach */}
            <div className='my-5 py-5'>
                <h3 className={`${styles.subTitle}`}>Our Step-by-Step Approach</h3>
                <div className='row'>
                    <div className='col-md-1 col-1'>
                        <div className={styles.verticalLine}></div>
                    </div>
                    <div className='col-md-11 col-11'>
                        {stepsData.map((step, index) => (
                            <div key={index} className={styles.stepContainer}>
                                <div className={styles.stepContent}>
                                    <h4 className={styles.stepTitle}>{step.title}</h4>
                                    <p className={styles.stepDesc}>{step.description}</p>
                                </div>
                                <img src={step.icon} className={styles.stepIcon} alt={step.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Deliverables Section */}
            <div className='my-5 py-5'>
                <h3 className={`${styles.subTitle}`}>Deliverables You Can Expect</h3>

                <div className='row'>
                    {deliverablesData.map((item, index) => (
                        <div key={index} className='col-md-4'>
                            <div className={styles.deliverableCard}>
                                {item.isSubtitle ? (
                                    <span className={styles.deliverableSubtitle}>{item.title}</span>
                                ) : (
                                    <>
                                        <h4 className={styles.deliverableTitle}>{item.title}</h4>
                                        <p className={styles.deliverableDesc}>{item.description}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ServiceSection/>
        </div>
    );
};

export default Services;
