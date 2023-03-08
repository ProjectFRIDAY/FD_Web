import React from 'react';
import BlogItem from './BlogItem';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const BlogListLayout = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7vw 0px;
  min-height: 100vh;
  gap: 30px 0px;
`;

export default function BlogList({ blogItems }) {
  const animationParams = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: 'easeOut' },
  };

  return (
    <BlogListLayout>
      {blogItems.map((item, index) => (
        <AnimatePresence key={index} {...animationParams}>
          <BlogItem blogItem={item} />
        </AnimatePresence>
      ))}
    </BlogListLayout>
  );
}
