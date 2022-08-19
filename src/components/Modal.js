import React from 'react';
import { useSetRecoilState } from 'recoil';
import { prjState, visibleState } from '../recoil/atom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ModalStyle = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 90%;
    height: 70%;
    top: 80vh;
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
  const setVisible = useSetRecoilState(visibleState);

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <ModalStyle {...rest}>
      <FontAwesomeIcon onClick={closeModal} icon={faXmark} className="icon" />
      <span>{rest.content}</span>
    </ModalStyle>
  );
}

export default Modal;
