import React from 'react';
import styled from 'styled-components';
import MyLink from '../MyLink';
import { motion, AnimatePresence } from 'framer-motion';

const TransparentModal = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 2;
  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

const Menu = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalLink = styled(MyLink)`
  margin: 1.5rem;
  font-weight: bold;
  font-size: 1.8rem;
  :hover {
    color: ${props => props.theme.primaryColor};
  }
  transition: 0.5s;
`;

function ModalMenu({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <TransparentModal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Menu>
            <ModalLink to="/" navigation={false}>
              HOME
            </ModalLink>
            <ModalLink to="/project" navigation={false}>
              PROJECT
            </ModalLink>
            <ModalLink to="/recruit" navigation={false}>
              RECRUIT
            </ModalLink>
            <ModalLink to="/contact" navigation={false}>
              CONTACT
            </ModalLink>
          </Menu>
        </TransparentModal>
      )}
    </AnimatePresence>
  );
}

export default ModalMenu;
