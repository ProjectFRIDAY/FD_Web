import React from 'react';
import { motion } from 'framer-motion';
import ScrollToTop from '../ScrollToTop';
import Header from '../Header';
import Footer from '../Footer';
import { isMobile } from 'react-device-detect';

const AnimatedPage = ({ children }) => {
  const innerContent = (
    <>
      <ScrollToTop delay={isMobile ? 0 : 500} />
      {children}
      <Footer />
    </>
  );

  return (
    <>
      <Header />
      {isMobile ? (
        innerContent
      ) : (
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          {innerContent}
        </motion.div>
      )}
    </>
  );
};

export default AnimatedPage;
