import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import './faq.css';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t, i18n } = useTranslation('home');
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  let language = i18n.language;
  return (
    <section className="width-90 faq-section">
      <Box component="div" className="faq-title-container column">
        <Typography
          variant="h6"
          className={`faq-titleHeading ${language === 'fa' ? 'clr-white faq-title rubik' : 'clr-white faq-title inter'}`}
        >
          {t('faqTitle.title')}
        </Typography>
        <Typography
          className={`${language === 'fa' ? 'clr-white faq-subtitle rubik' : 'clr-white faq-subtitle inter'}`}
        >
          {t('faqTitle.description')}
        </Typography>
      </Box>
      <div className="faq-container">
        {t('faqArray', { returnObjects: true }).map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleAccordionChange(index)}
            className="faq-wrapper column transparent"
          >
            <AccordionSummary
              expandIcon={
                expanded === index ? (
                  <CloseIcon className="purple" />
                ) : (
                  <AddIcon className="clr-white" />
                )
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              className={`faq-question flex flex-center ${
                expanded === index ? 'purple' : 'clr-white'
              }`}
            >
              <span className="faq-number-container flex flex-center">
                <Typography
                  className={`faq-number ${expanded === index ? 'purple' : 'clr-white'} ${
                    language === 'fa' ? 'rubik' : 'inter'
                  }`}
                >
                  {faq.index}
                </Typography>
              </span>
              <Typography
                className={`faq-question flex flex-center  ${
                  expanded === index ? 'purple' : 'clr-white'
                } ${language === 'fa' ? 'rubik' : 'inter'}`}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="faq-answer-wrapper">
              <Typography
                className={` faq-answer  ${language === 'fa' ? 'gray rubik' : 'gray inter'}`}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
