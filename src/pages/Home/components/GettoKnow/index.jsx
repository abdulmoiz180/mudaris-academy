import React from 'react';
import { Box, Button, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import './get.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Drimg from '@assets/images/Drimg.png';
import sciencespo from '@assets/images/sciencespo.png';
import tolonews from '@assets/images/tolonews.png';
import tv from '@assets/images/tv.png';
import mudaris from '@assets/images/mudaris.png';
import undplogo from '@assets/images/undplogo.png';
import onelogo from '@assets/images/onelogo.png';
import { useTranslation } from 'react-i18next';
import { GetStartedButton } from '../GetStartedButton/index.jsx';
import { priceCardsRef } from '../../index';
const logos = [sciencespo, tolonews, tv, mudaris, undplogo, onelogo];

const GettoKnow = () => {
  const { t, i18n } = useTranslation('home');
  const scrollToPriceCards = () => {
    if (priceCardsRef.current) {
      priceCardsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const isMobile = useMediaQuery('(max-width: 600px)'); // Detect mobile screen
  const language = i18n.language;
  // const getData = data.gettoknow;
  const fontClass = language === 'fa' ? 'rubik' : 'inter';
  // const fontClass = '';

  // Slider settings for mobile
  const sliderSettings = {
    dots: false, // Hide dots for a cleaner UI
    infinite: true, // Loop the slider infinitely
    arrows: false, // No navigation arrows
    speed: 2000, // Adjust smoothness (higher = slower)
    slidesToShow: 1.5, // Display 2 slides at a time
    slidesToScroll: 1, // Move one slide at a time
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 0, // Continuous movement
    cssEase: 'linear', // Ensures smooth movement
    pauseOnHover: false, // Keep moving even when hovered
  };

  return (
    <section className="GetToknowMainSection">
      <Box className="GetToknowMainContainer">
        <Box className={`GetToknowContent`}>
          <h1
            className={`onlyDRPICUSEDFORMOBILE titleGETtoKnow clr-white ${fontClass}`}
          >
            {t('gettoknow.title')}
          </h1>
          <img src={Drimg} alt="Drimg" />

          <Box className={`GetToknowTextContent ${fontClass}`}>
            <h1
              className={`mobHeading  titleGETtoKnow onlyDRPICUSEDFORLAPTOP ${fontClass}`}
            >
              {t('gettoknow.title')}
            </h1>
            <Box className="paraDivGettoKnow">
              <p className="zain mobdescription">
                {t('gettoknow.description')}
              </p>
            </Box>
            <GetStartedButton onButtonClick={scrollToPriceCards} />
          </Box>
        </Box>

        <Box className="GetToknowContentbelowContainer">
          <Box className={`GetToknowTextContentbelow ${fontClass}`}>
            <Box className="GetToknowTextContentbelowMainText">
              <h4 className={`${fontClass} mobsecondheading`}>
                {t('gettoknow.heading')}
              </h4>
              <p className={`${fontClass} mobdescription`}>
                {t('gettoknow.transformdescription')}
              </p>
              <h5 className="inter mobsecondheading">
                {t('gettoknow.featuredline')}
              </h5>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Mobile: Show slider */}
      {isMobile ? (
        <Box className="mobile-slider">
          <Slider {...sliderSettings}>
            {logos.map((logo, key) => (
              <Box key={key} className="GetToknowContentbelowLogo">
                <img src={logo} alt={`Company logo ${key}`} />
              </Box>
            ))}
          </Slider>
        </Box>
      ) : (
        /* Desktop: Show normal grid layout */
        <Box className="GetToknowContentbelowLogoBox">
          {logos.map((logo, key) => (
            <Box key={key} className="GetToknowContentbelowLogo">
              <img src={logo} alt={`Company logo ${key}`} />
            </Box>
          ))}
        </Box>
      )}
    </section>
  );
};

export default GettoKnow;
