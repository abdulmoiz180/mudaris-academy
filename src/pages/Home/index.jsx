import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import E_Learn from './components/E_Learn/index.jsx';
import Hero from './components/Hero/index.jsx';
import FAQ from './components/Accordion/index.jsx';
import GetStart from './components/GetStarted/index.jsx';
import PriceCards from './components/PriceCards/index.jsx';
import GettoKnow from './components/GettoKnow/index.jsx';
import DigitalEducation from './components/DigitalEducationSlider/index.jsx';
import Community from './components/Community/index.jsx';
import WhatYouGet from './components/WhatYouGet/index.jsx';
import './home.css';
import GetaJob from './components/GetaJob/index.jsx';
import LineCards from './components/ReadIt/index.jsx';
import { useTranslation } from 'react-i18next';
import Timeline from './components/newLine/index.jsx';
export const priceCardsRef = React.createRef();

const Home = () => {
  const { i18n } = useTranslation('home');
  const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const arrowRef = useRef(null);
  const scrollToPriceCards = () => {
    if (priceCardsRef.current) {
      priceCardsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 🌍 Automatically set the `dir` attribute when language changes
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'fa' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  // 🌟 Framer Motion Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };
  const [isCursorVisible, setCursorVisible] = useState(false);
  const [isArrowVisible, setArrowVisible] = useState(false);

  const handleMouseMove = (e) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (arrowRef.current) {
        const rect = arrowRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setArrowVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className={`home-page column primary-bg ${
        i18n.language === 'fa' ? 'rtl' : 'ltr'
      }`}
      ref={containerRef}
      onMouseEnter={() => setCursorVisible(true)}
      onMouseLeave={() => setCursorVisible(false)}
      onMouseMove={handleMouseMove}
    >
      {isCursorVisible && <div className="customCursor" ref={cursorRef}></div>}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <Hero />
        {/* done svg */}
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        id="community"
        variants={fadeInUp}
      >
        <Community />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <GetaJob />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        id="slider"
      >
        <DigitalEducation />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        id="whatyouget"
      >
        <WhatYouGet />
      </motion.div>
      <div className="priceCarddiv" ref={priceCardsRef}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="price"
          id="priceCard"
        >
          <PriceCards />
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <LineCards />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <Timeline />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <GettoKnow />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <E_Learn />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        id="faq"
      >
        <FAQ />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <GetStart />
      </motion.div>
    </section>
  );
};

export default Home;
