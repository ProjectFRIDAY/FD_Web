import React from 'react';
import styled from 'styled-components';
import MyLink from './MyLink';

const TransparentModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  @media only screen and (min-width: 700px) {
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

function ModalMenu({ children, ...args }) {
  return (
    <TransparentModal {...args}>
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
  );
}

// 현재 페이지에 해당하는 네비게이션 색상 설정

export default ModalMenu;
