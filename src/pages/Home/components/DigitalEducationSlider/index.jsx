import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './DigitalEducation.css';
import Affiliate from '@assets/images/affiliate.svg';
import Crypto from '@assets/images/crypto.svg';
import Camera from '@assets/images/camera.svg';
import Business from '@assets/images/business.svg';
import Inovation from '@assets/images/inovation.svg';
import Technology from '@assets/images/Technologyimg.svg';
import Mudaris from '@assets/images/mudaris.svg';
import Trading from '@assets/images/trading.svg';

const educationImages = [
  Trading,
  Business,
  Camera,
  Mudaris,
  Affiliate,
  Technology,
  Crypto,
  Inovation,
];

export default function DigitalEducation() {
  const { t, i18n } = useTranslation('home');
  const language = i18n.language;
  const fontClass = language === 'fa' ? 'rubik' : 'inter';
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 5000,
    slidesToShow: 6.7,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnDotsHover: true,
    pauseOnHover: true,
    cssEase: 'ease-in-out',
    draggable: true,
    swipeToSlide: true,
    rtl: false,
    responsive: [
      {
        breakpoint: 1544,
        settings: { slidesToShow: 5.7, slidesToScroll: 2 },
      },
      {
        breakpoint: 1044,
        settings: { slidesToShow: 4.2, slidesToScroll: 2, pauseOnFocus: true },
      },
      {
        breakpoint: 960,
        settings: { slidesToShow: 3.8, slidesToScroll: 2, pauseOnFocus: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4, slidesToScroll: 2, pauseOnFocus: true },
      },
      {
        breakpoint: 670,
        settings: { slidesToShow: 3.5, slidesToScroll: 2, pauseOnFocus: true },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2.3, slidesToScroll: 2, pauseOnFocus: true },
      },
    ],
  };

  return (
    <section className="DigitalEducationComponent">
      <Slider ref={sliderRef} {...settings}>
        {educationImages.map((img, index) => {
          const title = t(`digitaleducationcards.${index}.title`, {
            defaultValue: '',
          });
          const description = t(`digitaleducationcards.${index}.desc`, {
            defaultValue: '',
          });

          return (
            <Box
              key={index}
              className="PicBgDigitalEducationSlide"
              sx={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Box
                className={
                  hoveredIndex === index
                    ? 'DigitalEducationSlideTitleandPicBoxwith-description'
                    : 'DigitalEducationSlideTitleandPicBox'
                }
              >
                <Typography
                  variant="h5"
                  className={`
                    DigitalEducationCardTitle clr-white ${fontClass} 
                    ${hoveredIndex === index ? 'hight-visible' : ''}
                  `}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  className={`DigitalEducationCardDescription clr-white 
                      ${hoveredIndex === index ? 'visible' : ''} 
                      ${fontClass}`}
                >
                  {description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Slider>
      <Box className="DigitalEducationComponentTextComponent">
        <Typography
          variant="h1"
          className={`DigitalEducationComponentMainTitle mobHeading clr-white ${fontClass}`}
        >
          {t('digitaleducation.headtitle')}
        </Typography>
      </Box>
    </section>
  );
}
