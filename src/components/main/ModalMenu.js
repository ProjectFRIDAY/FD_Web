import React from 'react';
import styled from 'styled-components';

const TransparentModal = styled.div`
  width: 100%;
  height: 100%;
  display:none
  background-color: 'white';
  float: right;
  @media only screen and (max-width: 700px) {

  }
`;

function ModalMenu({ children, ...args }) {
  return <TransparentModal {...args}>{children}</TransparentModal>;
}

export default ModalMenu;
