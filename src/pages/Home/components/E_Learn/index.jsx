import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import './Elearn.css';
import Home from '@assets/icons/Home.svg';
import CaseStudy from '@assets/icons/caseStudy.svg';
import Discussion from '@assets/icons/communication.svg';
import Schedule from '@assets/icons/scheduel.svg';
import Certificate from '@assets/icons/diploma.svg';
import Upload from '@assets/icons/upload.svg';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const E_Learn = () => {
  const { t, i18n } = useTranslation('home');
  const language = i18n.language;
  const isMobile = useMediaQuery('(max-width: 670px)'); // Detect mobile screen

  // Slider settings for mobile
  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 1.1, // Display 1.5 slides for better UX
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Corrected autoplay speed
    cssEase: 'linear',
    pauseOnHover: false,
  };

  const imgs = [Home, CaseStudy, Discussion, Schedule, Certificate, Upload];

  return (
    <section className="Elearn-section">
      <div className="width-90 why-cards-container">
        {/* Title */}
        <Typography
          component="h6"
          className={`fs-48 why-title clr-white mobHeading ${
            language === 'fa' ? `align-right rubik` : `align-left inter`
          }`}
        >
          {t('whyElearn.0.title')}
        </Typography>

        {/* Mobile View - Using Slider */}
        {isMobile ? (
          <Slider {...sliderSettings}>
            {imgs.map((image, index) => (
              <Box key={index} component="div" className="why_card column">
                <Box component="div" className="why-img-wrapper">
                  <img src={image} alt={`icon-${index}`} />
                </Box>
                <Typography
                  variant="body1"
                  className={`mobsecondheading ${
                    language === 'fa'
                      ? 'why-card-content rubik'
                      : 'why-card-content inter'
                  }`}
                >
                  {t(`whyElearn.1.${index}`)}
                </Typography>
              </Box>
            ))}
          </Slider>
        ) : (
          // Desktop View - Normal Layout
          <Box
            component="div"
            className="why_card_wrapper flex border-gradient"
          >
            {imgs.map((image, index) => (
              <React.Fragment key={index}>
                <Box component="div" className="why_card column">
                  <Box component="div" className="why-img-wrapper">
                    <img src={image} alt={`icon-${index}`} />
                  </Box>
                  <Typography
                    variant="body1"
                    className={`mobsecondheading ${
                      language === 'fa'
                        ? 'why-card-content rubik'
                        : 'why-card-content inter'
                    }`}
                  >
                    {t(`whyElearn.1.${index}`)}
                  </Typography>
                </Box>
                <div className="vertical"></div>
                {(index + 1) % 3 === 0 && index !== imgs.length - 1 && (
                  <div className="horizontal-line"></div>
                )}
              </React.Fragment>
            ))}
          </Box>
        )}
      </div>
    </section>
  );
};

export default E_Learn;
