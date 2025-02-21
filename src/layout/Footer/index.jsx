import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import './footer.css';
import FaceBook from '@assets/icons/Facebook.svg';
import Instagram from '@assets/icons/Instagram.svg';
import Youtube from '@assets/icons/Lozenge.svg';
import MudasrisLogo from '@assets/images/mudarisLogo.png';
import Tiktok from '@assets/icons/tiktok.svg';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  let language = '';

  const fontClass = language === 'fa' ? 'zain-real' : 'zain';
  const { t } = useTranslation('home');
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleCloseNavMenu();
  };
  return (
    <footer className="footer-bg align-center">
      <div className="footer-section row">
        <Box component="div" className="footer-left-section column">
          <Box component="div" className="footer-content-wrapper">
            <div className="footer-logo-heading">
              <img src={MudasrisLogo} alt="Logo" />
              <Typography
                variant="h6"
                className={`clr-white footer-h2 ${fontClass}`}
              >
                Mudaris Academy
              </Typography>
            </div>
            <Typography
              variant="body1"
              className={`secondary-font-clr footer-p ${fontClass}`}
            >
              {t('footerDescription')}
            </Typography>
          </Box>
          {/* <Button
      variant="outlined"
      className="footer-btn clr-white inter"
      onClick={toggleLanguage}
    >
      <span>
        <LanguageIcon />
      </span>
      {data.togglebutton}
      <span>
        <ArrowForwardIosIcon className="footer-arrow-icon" />
      </span>
    </Button> */}
        </Box>

        <Box component="div" className="flex footer-right-section">
          <ul className="sublinks-wrapper">
            {Array.isArray(t('footerContent', { returnObjects: true })) &&
              t('footerContent', { returnObjects: true }).map(
                (content, index) => (
                  <Button
                    key={index}
                    className="white-normal rubik"
                    onClick={() => handleScrollToSection(content.id)}
                  >
                    {content.label}
                  </Button>
                )
              )}
          </ul>
        </Box>
      </div>
      <Divider />
      <div className="copy-write space-between flex-center">
        <div className="footer-icons flex">
          <a
            href="https://www.instagram.com/mudarisacademy?igsh=MTRxeGpmYnAzMjNqaQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/share/19vLPZX6B3/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FaceBook} alt="Facebook" />
          </a>
          <a
            href="https://www.youtube.com/@DrEnayat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Youtube} alt="YouTube" />
          </a>
          <a
            href="https://www.tiktok.com/@mudarisacademy?_t=ZS-8th1CBeXypc&_r=1" // need to check
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Tiktok} alt="TikTok" className="tiktokiconfooter" />
          </a>
        </div>

        <Typography
          variant="body1"
          className={`secondary-font-clr footer-p dm-sans`}
        >
          © 2025 Mudaris Academy, Inc. All rights reserved
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
