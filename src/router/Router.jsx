import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home/index.jsx';
import Footer from '../layout/Footer/index.jsx';
import Navbar from '../layout/NavBar/index.jsx';
import LoadingScreen from '../pages/Home/components/LoadingScreen/index.jsx';

const Router = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default Router;
