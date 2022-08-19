import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ModalStyle = styled.div`
  ${props => {
    const img = props.img;
    const link = props.link;
    const content = props.content;
  }}
  @media only screen and (max-width: 1000px) {
    width: 90%;
    height: 50%;
    top: 45vh;
    left: 5vw;
  }
  background-color: white;
  display: ${props => (props.visible ? 'block' : 'none')};
  width: 45%;
  height: 90vh;
  position: absolute;
  border-radius: 3rem;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  top: 80vh;
  left: 27%;
`;

function Modal({ ...rest }) {
  console.log(rest);
  return (
    <ModalStyle {...rest}>
      <FontAwesomeIcon icon={faXmark} className="icon" />
    </ModalStyle>
  );
}

export default Modal;
