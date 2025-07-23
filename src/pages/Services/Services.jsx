import styles from './Services.module.scss';
import ServiceImage from '../../assets/serviceImage.png';
import { FaArrowCircleRight } from 'react-icons/fa';

import brandImageOne from '../../assets/brands/CAD.png'
import brandImageTwo from '../../assets/brands/CAM.png'
import brandImageThree from '../../assets/brands/CAE.png'
import rocketIcon from '../../assets/rocketIcon.png';
import DiscoverIcon from '../../assets/discoverIcon.png';
import ContainerIcon from '../../assets/containerIcon.png';
import ContainerOutlineIcon from '../../assets/ContainerOutlineIcon.png';
import ArrowClickIcon from '../../assets/ArrowClickIcon.png';
import SendIcon from '../../assets/SendIcon.png';
import ServiceSection from '../../components/ServiceSection/ServiceSection';

const Services = () => {

    const stepsData = [
        {
            title: "Requirement Understanding",
            description:
                `We begin by learning about your idea, problem, or product goal. Whether you are starting from scratch, updating an old design, or just need technical help, we listen carefully.`,
            icon: DiscoverIcon
        },
        {
            title: "Research and Concept Ideation",
            description: `We explore possibilities through sketches, references, and initial 3D concepts to shape your vision into a clear direction.
    (You can approach us even if you only need help with early design or ideation.)` ,
            icon: ContainerIcon
        },
        {
            title: "3D Design and CAD Modeling",
            description: `Our engineers build precise 3D models using SolidWorks, CATIA, Creo, or AutoCAD. The models are tailored for product function, fit, and form.

(We also handle 2D to 3D migration, legacy design conversion, and modeling only projects.)
`,
            icon: ContainerOutlineIcon
        },
        {
            title: "Simulation and Validation (CAE)",
            description: `If needed, we run simulations like stress analysis, motion studies, or thermal testing to validate and optimize your design.

(You can choose Invocad just for simulation and performance analysis.)
`,
            icon: ArrowClickIcon
        },
        {
            title: "Design for Manufacturing (DFM)",
            description: `We refine the design to ensure it is production ready. This includes optimization for materials, tolerances, machining feasibility, and cost efficiency.

(Perfect for clients who already have a model and need help getting it ready for manufacturing.)
`,
            icon: SendIcon
        },
        {
            title: "Technical Documentation",
            description: `We create detailed 2D drawings, exploded views, bills of materials, and assembly instructions for vendors and production teams.`,
            icon: SendIcon
        },
        {
            title: "Manufacturing Support",
            description: `From file preparation and nesting to working with machinists, we assist during the production phase to ensure accuracy and efficiency.

(Even if your design is already done, we can help with just manufacturing support.)
`,
            icon: SendIcon
        },
        {
            title: "Delivery and Post Project Support",
            description: `We hand over all source files, drawings, and simulation reports. We also remain available for revisions, file conversions, or additional updates.
            `,
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
            title: "CAD",
            description: `3D CAD Models
<br/>Concept Sketches
<br/>Engineering Drawings
<br/>2D to 3D Conversion
<br/>Reverse Engineering
`
        },
        {
            title: "CAM",
            description: `Design for Manufacturing
<br/>CNC Ready Drawings and Nesting
<br/>Tolerance Optimization
<br/>Prototyping Guidance
`},
        {
            title: "CAE",
            description: `FEA
<br/>Motion Simulation
<br/>Thermal Analysis
<br/>Design Optimization
`        },

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
                    {/* <button className={styles.herobutton}>
                        Learn more <FaArrowCircleRight className={styles.icon} size={40} />
                    </button> */}
                </div>
            </div>

            {/* Why Choose Invocad */}
            <div className='my-5 py-5'>
                <p className={styles.brandTitle}><img src={rocketIcon} />Why Choose Invocad?</p>
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
                <p>
                    End to end or just what you need. We adapt to your project.
                </p>
                <p>
                    At Invocad, we offer a complete design to manufacturing workflow. But you do not need to take the full process.
                    We are flexible. You can engage us for a specific phase only — whether it is concept design, 3D modeling, simulation, or just manufacturing support.
                </p>
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
                                {/* <img src={step.icon} className={styles.stepIcon} alt={step.title} /> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Deliverables Section */}
            <div className='my-5 py-5'>
                <h3 className={`${styles.subTitle}`}>Our Services in...</h3>

                <div className='row'>
                    {deliverablesData.map((item, index) => (
                        <div key={index} className='col-md-4'>
                            <div className={styles.deliverableCard}>
                                {item.isSubtitle ? (
                                    <span className={styles.deliverableSubtitle}>{item.title}</span>
                                ) : (
                                    <>
                                        <h4 className={styles.deliverableTitle}>{item.title}</h4>
                                        <p className={styles.deliverableDesc} dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ServiceSection />
        </div>
    );
};

export default Services;
