import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import Slider from 'react-slick'; // Import React Slick
import './PriceCard.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Line from '@assets/icons/line.svg';
import Bitcoin from '@assets/icons/bitcoin-svg.svg';
import { useTranslation } from 'react-i18next';

export const PriceCards = () => {
  const { t, i18n } = useTranslation('home');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1030);
  const language = i18n.language;
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1030);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const paymentPlans = t('paymentPlans', { returnObjects: true }); // Fetching translated JSON from i18next

  const handleSubscribe = () => {
    window.location.href = paymentPlans[1].paymentGateway;
  };

  // Slick Slider Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    draggable: true,
    slidesToShow: 3, // Default for mobile
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600, // Small screens
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 844, // Show 2 cards at 844px
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="price-container">
      <Box className="text-container">
        <Typography variant="h1" className="plan-title mobHeading rubik">
          {t('paymentHeading.title')}
        </Typography>
        <Typography variant="body1" className="plan-description zain">
          1999 قیمت کلی این دوره پس از تخفیف 299 یورو است 💵 بدانید که شما مصرف
          نه بلکه سرمایه گذاری می‌کنید
        </Typography>
        <Button
          variant="contained"
          className={`subscribe-button-psedu `}
          onClick={handleSubscribe}
        >
          <span className="line-through manrope"> 1999 €</span>
          <span className="middletext zain-real">
            برای ثبت نام اینجا کلیک کنید
          </span>
          <span className="manrope"> 299 €</span>
        </Button>
        <p className="plan-description">{t('paymentHeading.description')}</p>
      </Box>

      {/* Conditionally Render Grid or Slider */}
      {isMobile ? (
        <Slider {...sliderSettings}>
          {paymentPlans.map((plan, index) => (
            <Card
              key={index}
              className={`plan-card ${language === 'fa' ? 'align-right' : 'align-left'}`}
            >
              <CardContent>
                <Box className="plan-header">
                  <div className="titleandSVG">
                    <Typography variant="h5" className="plan-heading  rubik">
                      {plan.title}
                    </Typography>
                    {index === 3 || index === 4 ? (
                      <img src={Bitcoin} className="bitCoinLogo" />
                    ) : (
                      ''
                    )}
                  </div>
                  <Typography variant="h6" className="plan-price zain">
                    {plan.price}
                  </Typography>
                  <img src={Line} className="linePic" alt="line separator" />
                </Box>
                <div className="plan-body">
                  {plan.feature_desc && (
                    <Typography variant="body2" className="f-desc zain ">
                      {plan.feature_desc}
                    </Typography>
                  )}
                  <ul className="plan-perks">
                    {plan.features?.map((feature, i) => (
                      <li className="zain" key={i}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <Box className="ButtonDiv">
                <Button
                  className={`subscribe-button ${index === 0 ? 'orange-btn' : index === 1 ? 'pink-btn' : index === 2 ? 'green-btn' : 'orange-btn'}`}
                  onClick={handleSubscribe}
                >
                  Pay Now
                </Button>
              </Box>
            </Card>
          ))}
        </Slider>
      ) : (
        <Box className="card-wrapper rev-flex">
          {paymentPlans.map((plan, index) => (
            <Card
              key={index}
              className={`plan-card ${language === 'fa' ? 'align-right' : 'align-left'}`}
            >
              <CardContent>
                <Box className="plan-header">
                  <div className="titleandSVG">
                    <Typography variant="h5" className="plan-heading rubik">
                      {plan.title}
                    </Typography>
                    {index === 0 || index === 1 ? (
                      <img src={Bitcoin} className="bitCoinLogo" />
                    ) : (
                      ''
                    )}
                  </div>
                  <Typography variant="h6" className="plan-price zain">
                    {plan.price}
                  </Typography>
                  <img src={Line} className="linePic" alt="line separator" />
                </Box>
                <div className="plan-body">
                  {plan.feature_desc && (
                    <Typography variant="body2" className="f-desc zain ">
                      {plan.feature_desc}
                    </Typography>
                  )}
                  <ul className="plan-perks">
                    {plan.features?.map((feature, i) => (
                      <li key={i} className="zain">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <Box className="ButtonDiv">
                <Button
                  className={`subscribe-button ${index === 0 ? 'orange-btn' : index === 1 ? 'green-btn' : index === 2 ? 'pink-btn' : 'orange-btn'}`}
                  onClick={handleSubscribe}
                >
                  Pay Now
                </Button>
              </Box>
            </Card>
          ))}
        </Box>
      )}
    </section>
  );
};

export default PriceCards;
// removed card data 
// {
//   "title": "پرداخت در ۲ قسط با کریپتو",
//   "price": "۲۹۹ €",
//   "feature_desc": "این گزینه مشابه گزینه دوم است اما با امکان پرداخت در دو نوبت از طریق ارزهای دیجیتال. در این روش:",
//   "features": [
//     "✅ همه‌ی مزایای گزینه‌های قبلی را خواهید داشت",
//     "✅ پرداخت ۵۰٪ مبلغ در ابتدا، و ۵۰٪ دیگر یک ماه بعد از طریق کریپتو",
//     "✅ همکاران ما در زمان مقرر، پرداخت مرحله دوم را با شما تنظیم خواهند کرد",
//     "🔘 💵 مبلغ اولین پرداخت: ۱۴۹.۵۰ یورو معادل کریپتو",
//     "🔘 ₿ پرداخت از طریق USDT، UCDC ",
//     "📌 اگر قصد دارید از این روش استفاده کنید، لطفاً تنها از روی همین لینک و از طریق ویب سایت ما انجام دهید."
//   ],
//   "paymentGateway": "https://nowpayments.io/payment/?iid=5754690434"
// },