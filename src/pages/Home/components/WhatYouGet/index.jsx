import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick'; // Import React Slick
import './whatyouget.css';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import playbuttonimg from '@assets/icons/play.svg';
import 'slick-carousel/slick/slick.css'; // Import Slick styles
import 'slick-carousel/slick/slick-theme.css';

const WhatYouGet = () => {
  const { t, i18n } = useTranslation('home');
  const videoRefs = useRef([]);
  const playButtonRefs = useRef([]);
  const language = i18n.language;

  // State to track screen size
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1030);

  // Update on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1030);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 🎬 Video Play/Pause Logic
  const videoPlay = (index) => {
    const currentVideo = videoRefs.current[index];
    const currentPlayButton = playButtonRefs.current[index];

    if (!currentVideo || !currentPlayButton) return;
    if (currentVideo.paused) {
      currentVideo.play();
      currentPlayButton.classList.add('hidden');
    } else {
      currentVideo.pause();
      currentPlayButton.classList.remove('hidden');
    }

    videoRefs.current.forEach((video, idx) => {
      if (idx !== index && video) {
        video.pause();
        playButtonRefs.current[idx]?.classList.remove('hidden');
      }
    });
  };

  const whatYouGetData = t('whatyouget', { returnObjects: true });
  if (!Array.isArray(whatYouGetData) || whatYouGetData.length === 0)
    return null;

  const heading = whatYouGetData[0]?.Heading || '';
  const contentData = whatYouGetData.slice(1);
  const fontClass = language === 'fa' ? 'rubik' : 'inter';

  // 🔥 Slick Slider Settings for Mobile
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className={`whatyouget-container ${fontClass}`}>
      <Box className="whatyouget-containerMainText">
        <h1
          className={`whatyouget-containerMainHeading mobHeading ${fontClass}`}
        >
          {heading}
        </h1>
      </Box>
      {isMobile ? (
        // 🛑 Use React Slick for Mobile
        <Slider {...sliderSettings}>
          {contentData.map((item, index) => (
            <div
              key={index}
              className={`whatyouget-card clr-white ${fontClass}`}
            >
              <div className="whatyouget-card-text">
                {item.title && (
                  <h2 className={`${fontClass} mobsecondheading`}>
                    {item.title}
                  </h2>
                )}
                {item.description && (
                  <p className={`${fontClass} mobdescription`}>
                    {item.description}
                  </p>
                )}
                {item.description2 && (
                  <p className={`${fontClass} mobdescription`}>
                    {item.description2}
                  </p>
                )}
              </div>
              <div className="whatyouget-card-imagecontainer">
                <iframe
                  width="280"
                  height="207"
                  src="https://www.youtube.com/embed/WqWMdzkiVN8?si=TDOQOSeUMvpYstRX"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <img
                  src={playbuttonimg}
                  alt="Play button"
                  className="whatyouget-playbutton"
                  onClick={() => videoPlay(index)}
                  ref={(el) => (playButtonRefs.current[index] = el)}
                />
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        // 🛑 Standard Layout for Desktop
        <Box className="whatyouget-cards">
          {contentData.map((item, index) => (
            <div
              key={index}
              className={`whatyouget-card clr-white ${fontClass}`}
            >
              <div className="whatyouget-card-text">
                {item.title && (
                  <h2 className={`${fontClass} mobsecondheading`}>
                    {item.title}
                  </h2>
                )}
                {item.description && (
                  <p className={`${fontClass} mobdescription`}>
                    {item.description}
                  </p>
                )}
                {item.description2 && (
                  <p className={`${fontClass} mobdescription`}>
                    {item.description2}
                  </p>
                )}
              </div>
              <div className="whatyouget-card-imagecontainer">
                <iframe
                  width="280"
                  height="207"
                  src="https://www.youtube.com/embed/WqWMdzkiVN8?si=TDOQOSeUMvpYstRX"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <img
                  src={playbuttonimg}
                  alt="Play button"
                  className="whatyouget-playbutton"
                  onClick={() => videoPlay(index)}
                  ref={(el) => (playButtonRefs.current[index] = el)}
                />
              </div>
            </div>
          ))}
        </Box>
      )}
    </section>
  );
};

export default WhatYouGet;
