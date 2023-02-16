import React from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Main from './pages/Main';
import Project from './pages/Project';
import Recruit from './pages/Recruit';
import Contact from './pages/Contact';

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
  ]);

  if (!element) return null;

  return <AnimatePresence mode="wait">{React.cloneElement(element, { key: location.pathname })}</AnimatePresence>;
}

export default App;
