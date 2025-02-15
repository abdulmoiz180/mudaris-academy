import React, { useRef, useState, useEffect } from 'react';
import './getajob.css';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import MudarisVideo from '@assets/images/AgencyNavigatorMale.mp4';
import { KeyboardArrowDown } from '@mui/icons-material';

const GetaJob = () => {
  const { t, i18n } = useTranslation('home');
  const language = i18n.language;

  const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const arrowRef = useRef(null);
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
      className="getajob-container"
      ref={containerRef}
      onMouseEnter={() => setCursorVisible(true)}
      onMouseLeave={() => setCursorVisible(false)}
      onMouseMove={handleMouseMove}
    >
      {isCursorVisible && <div className="customCursor" ref={cursorRef}></div>}

      <Box className="getajob-heading">
        <h1
          className={`clr-white mobHeading ${language === 'fa' ? 'rubik' : 'inter'}`}
        >
          {t('getajob.headtitle')}
        </h1>
      </Box>

      <Box className="getajob-content">
        <div className="getajob-paragraphs">
          <div className="getajobParaforbg">
            <p
              className={`getajob-qa ${language === 'fa' ? 'zain' : 'dm-sans'}`}
            >
              {t('getajob.descriptionpara1')}
            </p>
          </div>
          <Box
            ref={arrowRef}
            className={`arrow-container ${isArrowVisible ? 'animated zoomIn' : ''}`}
          >
            <Box className="arrow-2">
              <KeyboardArrowDown fontSize="large" />
            </Box>
            <Box className="arrow-1"></Box>
          </Box>

          <div className="getajobParaforbg">
            <p
              className={`getajob-qa ${language === 'fa' ? 'zain' : 'dm-sans'}`}
            >
              {t('getajob.descriptionpara2')}
            </p>
          </div>

          {/* Animated Arrow */}
          <Box
            ref={arrowRef}
            className={`arrow-container ${isArrowVisible ? 'animated zoomIn' : ''}`}
          >
            <Box className="arrow-2">
              <KeyboardArrowDown fontSize="large" />
            </Box>
            <Box className="arrow-1"></Box>
          </Box>

          <div className="getajobParaforbg">
            <p
              className={`getajob-qa ${language === 'fa' ? 'zain' : 'dm-sans'}`}
            >
              {t('getajob.descriptionpara3')}
            </p>
          </div>
          <Box
            ref={arrowRef}
            className={`arrow-container ${isArrowVisible ? 'animated zoomIn' : ''}`}
          >
            <Box className="arrow-2">
              <KeyboardArrowDown fontSize="large" />
            </Box>
            <Box className="arrow-1"></Box>
          </Box>

          <div className="getajobParaforbg">
            <p
              className={`getajob-qa ${language === 'fa' ? 'zain' : 'dm-sans'}`}
            >
              {t('getajob.descriptionpara4')}
            </p>
          </div>

          {/* Infinite looping video */}
          <div className="logodiv">
            <video width="100%" autoPlay loop muted>
              <source src={MudarisVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default GetaJob;
