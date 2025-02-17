import React, { useEffect, useState } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './LineCard.css';
import { motion, useScroll } from 'framer-motion';
import LineImg from '@assets/images/linewo.svg';
import Symbol4 from '@assets/icons/card.svg';
import Symbol5 from '@assets/icons/uni.svg';
import Symbol6 from '@assets/icons/dimond.svg';
import Symbol7 from '@assets/icons/person.svg';
const LineCards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation('home');
  const { scrollYProgress } = useScroll();
  const parentArray = t('Important', { returnObjects: true });
  const symbolArray = [Symbol4, Symbol5, Symbol6, Symbol7];
  const [glowIntensity, setGlowIntensity] = useState(0.3);
  useEffect(() => {
    const updateGlow = () => {
      setGlowIntensity(0.3 + scrollYProgress.get() * 1.5); // Increase glow as you scroll down
    };
    const unsubscribe = scrollYProgress.onChange(updateGlow);
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <Box className="importanttoread">
        <Typography
          variant="h1"
          className="LineCardContainerMainTitle rubik mobHeading"
        >
          {parentArray[0].title}
        </Typography>
        <Box className="LineCardContainerMain">
          <Box className="LineCardContainerMainPic">
            {isMobile ? (
              <motion.div
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  top: 0,
                  bottom: 0,
                  left: '50%',
                  height:'1350px',
                  transform: 'translateX(-50%)',
                  width: '10px',
                  background: '#8C45FF66', // Matches your design
                }}
                animate={{
                  boxShadow: `0px 0px ${25 + glowIntensity * 30}px rgba(140, 69, 255, ${0.5 + glowIntensity * 0.5})`,
                }}
              />
            ) : (
              <img
                src={LineImg}
                className="importanttoreadLinePic"
                alt="Line"
              />
            )}
            <Box className="importanttoreadCardnumberDivParent">
              {parentArray.slice(1).map((item, index) => (
                <Box key={index + 1} className={`importanttoreadCardnumberDiv`}>
                  <Typography
                    variant="h6"
                    className="importanttoreadCardnumber rubik"
                  >
                    {index + 1}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box className="importanttoreadcardContainer">
            {parentArray.slice(1).map((item, index) => (
              <Box className="uaatest" key={index}>
                <Box className="importanttoreadCard">
                  <Box className="importanttoreadCardPicDiv">
                    <img
                      src={symbolArray[index % symbolArray.length]}
                      alt={`Symbol ${index}`}
                    />
                  </Box>
                  <Box className="importanttoreadCardContentText">
                    <Typography
                      variant="h6"
                      className="importanttoreadCardtitle rubik "
                    >
                      {item.cardTitle}
                    </Typography>
                    <Typography
                      variant="body1"
                      className="importanttoreadCarddescription rubik "
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LineCards;
