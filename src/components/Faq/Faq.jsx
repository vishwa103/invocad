import React, { useState } from 'react';
import styles from './Faq.module.scss';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqData = [
  {
    question: 'What services does Invocad provide?',
    answer: `We offer end-to-end product design and development services, including:
<br/>•	 3D CAD Modelling & Drafting
<br/>•	 CAE (Structural & Thermal Simulations, FEA)
<br/> •	CAM (In-house or partnered part manufacturing)
<br/>•	Reverse Engineering
<br/>•	 Design for Manufacturing (DFM)
<br/>•	Technical Drawings & Documentation
<br/>•	 Product Prototyping & Fabrication Support
<br/>•	 Design Consulting
<br/>From idea to industry — we make sure your product is ready to perform.`,
  },
  {
    question: 'What do you mean by CAM?',
    answer: `CAM (Computer-Aided Manufacturing) at Invocad means we physically manufacture components based on your design.
<br/>We do not generate G-code/M-code — instead, we use our own or partner workshop facilities to turn your design into a real product.` },
  {
    question: 'What is CAE and how can it help my project?',
    answer: `CAE (Computer-Aided Engineering) helps simulate real-world conditions like load, heat, and stress.
<br/>We use CAE tools to:
<br/>•	Validate product strength
<br/>•	Optimize design before manufacturing
<br/>•	Reduce material cost and failures
<br/>This ensures your design is safe, efficient, and production-ready.` },  
{
    question: 'Do you only work with big companies?',
    answer: `Nope — we proudly work with:
<br/>•	Individual innovators
<br/>•	Startups
<br/>•	MSMEs & large industries
<br/>Whether you have a sketch or a full design brief, we’re here to help bring it to life.` },  {
    question: 'Can I start with just an idea or rough sketch?',
    answer: `Absolutely! Many of our projects begin with a simple concept or sketch.
<br/>We’ll help you develop it into a complete, manufacturable design.` },  {
    question: 'Do you help with prototyping?',
    answer: `Yes. We support both digital and physical prototyping, and can help you select materials, vendors, or even arrange fabrication depending on your needs.` },  {
    question: 'What industries do you serve?',
    answer: `We’ve worked in:
<br/>•	Automotive
<br/>•	Industrial Equipment
<br/>•	Consumer Products
<br/>•	Medical Devices
<br/>•	Electronics Enclosures
<br/>•	Custom Tools & Fixtures
<br/>If it needs design and precision — we’re your team.` },  {
    question: 'How is pricing handled?',
    answer: `We offer flexible pricing based on:
<br/>•	Per-hour CAD work
<br/>•	Full-project fixed quotes
<br/>•	Manufacturing-based costing
<br/>We provide clear estimates after understanding your needs — no hidden fees.` },
//   {
//     question: 'Will you sign an NDA?',
//     answer: `Yes. We take your intellectual property seriously and are happy to sign a Non-Disclosure Agreement to protect your idea and data.` },  
//     {
//     question: 'What software do you use?',
//     answer: `We use industry-standard tools, including:
// <br/>•	SolidWorks
// <br/>•	CATIA
// <br/>•	Creo
// <br/>•	AutoCAD
// <br/>•	Fusion 360
// <br/>•	Ansys (for CAE)
// <br/>We can also adapt based on client requirements or file formats.` }, 

{
    question: 'Do you provide support after design delivery?',
    answer: `Yes. Our support doesn’t end at delivery. We offer:
<br/>•	Design modifications
<br/>•	Drawing updates
<br/>•	Support during manufacturing
<br/>•	Advice on materials, assembly, etc.
<br/>We’re in it with you till the finish line.` }, {
    question: 'How do I start a project with Invocad?',
    answer: `It’s simple:
<br/>•	Reach out through our website, WhatsApp, or email
<br/>•	Share your idea or requirement
<br/>•	We’ll schedule a free consultation
<br/>•	Then send you a custom quote and timeline` },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className={styles.faqContainer}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div className={styles.question} onClick={() => toggleFaq(index)}>
              <span>{item.question}</span>
              {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </div>
            <div
              className={`${styles.answer} ${
                activeIndex === index ? styles.open : ''
              }`}
              dangerouslySetInnerHTML={{ __html: item.answer }}
            >
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
