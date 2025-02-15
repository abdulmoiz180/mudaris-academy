import React, { useEffect, useState } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { motion, useScroll } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './random.css';

const TimelineCard = ({ title, description, index, isMobile }) => {
  const theme = useTheme();
  const { t, i18n } = useTranslation('home');
  const language = i18n.language;
  const cardVariants = {
    hidden: { opacity: 0, x: isMobile ? 0 : index % 2 === 0 ? -150 : 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 120, damping: 10 },
    },
  };

  return (
    <section className="randomContainerMainsection">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={cardVariants}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile
              ? 'column'
              : index % 2 === 0
                ? 'row'
                : 'row-reverse',
            alignItems: 'center',
            gap: 4,
            mb: 8,
            position: 'relative',
          }}
        >
          {/* Glowing Dot on Timeline */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '18px',
              height: '18px',
              background:
                'radial-gradient(circle, rgba(255,255,255,0.9) 20%, rgba(0,0,255,0.5) 80%)',
              borderRadius: '50%',
              boxShadow: '0px 0px 12px rgba(255, 255, 255, 0.8)',
              zIndex: 2,
            }}
          />

          {/* Card Content */}
          <Box
            sx={{
              width: isMobile ? '100%' : '40%',
              textAlign: isMobile
                ? 'center'
                : index % 2 === 0
                  ? 'left'
                  : 'right',
              backdropFilter: 'blur(10px)',
              padding: 3,
            }}
            className={`randomComponentCard clr-white ${
              language === 'fa'
                ? ' alignItems-right align-right'
                : ' alignItems-left  align-left'
            }`}
          >
            <div className="randomComponentCardTextComponent">
              <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', mb: 2, color: 'white' }}
                className={`randomComponentCardTextComponentHeading mobsecondheading ${language === 'fa' ? ' rubik' : ' inter'}`}
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'white' }}
                className={`randomComponentCardTextComponentDescription mobdescription ${language === 'fa' ? 'zain' : ' inter'}`}
              >
                {description}
              </Typography>
            </div>
          </Box>
        </Box>
      </motion.div>
    </section>
  );
};

const Timeline = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { scrollYProgress } = useScroll();
  const { t, i18n } = useTranslation('home');
  const language = i18n.language;
  const [glowIntensity, setGlowIntensity] = useState(0.3);
  const timelineData = t('participate', { returnObjects: true });

  useEffect(() => {
    const updateGlow = () => {
      setGlowIntensity(0.3 + scrollYProgress.get() * 1.5); // Increase glow as you scroll down
    };
    const unsubscribe = scrollYProgress.onChange(updateGlow);
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <h1 className="participateCardContainerMainTitle rubik mobHeading">
        {timelineData[0].title}
      </h1>
      <Box
        sx={{
          py: 8,
          px: { xs: 2, sm: 4, md: 8 },
          position: 'relative',
          backgroundColor: '#000',
          minHeight: '100vh',
        }}
      >
        {/* Glowing Vertical Line in Middle */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '6px',
            background: '#8C45FF66', // Matches your design
          }}
          animate={{
            boxShadow: `0px 0px ${25 + glowIntensity * 30}px rgba(140, 69, 255, ${0.5 + glowIntensity * 0.5})`,
          }}
        />

        {timelineData.slice(1).map((item, index) => (
          <>
            <TimelineCard
              key={index}
              index={index}
              isMobile={isMobile}
              {...item}
            />
          </>
        ))}
      </Box>
    </>
  );
};

export default Timeline;
