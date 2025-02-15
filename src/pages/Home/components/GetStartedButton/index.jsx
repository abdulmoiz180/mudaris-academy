import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import './getstartedButton.css';

export const GetStartedButton = ({ onButtonClick }) => {
  return (
    <div className="GetStartedButtonDiv">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 20px rgba(255, 0, 255, 0.7)",
        }}
      >
        <Button className="GetStartedButton zain" onClick={onButtonClick}>
          به جمع میلیونر‌های جوان بپیوندید
        </Button>
      </motion.div>
    </div>
  );
};
