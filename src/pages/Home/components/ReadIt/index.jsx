import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './LineCard.css';
import LineImg from '@assets/images/linewo.svg';
import Symbol4 from '@assets/icons/card.svg';
import Symbol5 from '@assets/icons/uni.svg';
import Symbol6 from '@assets/icons/dimond.svg';
import Symbol7 from '@assets/icons/person.svg';
const LineCards = () => {
  const { t } = useTranslation('home');
  const parentArray = t('Important', { returnObjects: true });
  const symbolArray = [Symbol4, Symbol5, Symbol6, Symbol7];

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
            <img src={LineImg} className="importanttoreadLinePic" alt="Line" />
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
