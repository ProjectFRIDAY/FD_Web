import React from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Main from './pages/Main';
import Project from './pages/Project';
import Recruit from './pages/Recruit';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  const location = useLocation();
  const element = useRoutes([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/project',
      element: <Project />,
    },
    {
      path: '/recruit',
      element: <Recruit />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/blog',
      element: <Blog />,
    },
  ]);

  if (!element) return null;

  return <AnimatePresence mode="wait">{React.cloneElement(element, { key: location.pathname })}</AnimatePresence>;
}

export default App;
