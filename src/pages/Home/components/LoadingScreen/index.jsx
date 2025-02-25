import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <motion.section
      className="loadingScreenMainContainer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      <h1 className='rubik persianHeading'>آکادمی مدرس در حال بارگذاری است</h1>
      <div className="loader">
        <div className="player1"></div>
        <div className="player2"></div>
        <div className="ball"></div>
        <div className="table">
          <div className="net"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default LoadingScreen;
