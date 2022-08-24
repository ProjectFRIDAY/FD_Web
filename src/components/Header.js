import React from 'react';
import styled, { css } from 'styled-components';
import { menuAtom } from '../recoil/atom';
import { useRecoilState } from 'recoil';
import ModalMenu from './main/ModalMenu';
import MyLink from '../components/MyLink';

const FixedHeader = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 1rem;
  background-color: black;
  font-weight: bold;
  position: fixed;
  top: 0;
  z-index: 3;
`;

const VerticalLine = styled.li`
  display: inline-block;
  margin-left: 3rem;
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  @media only screen and (max-width: 800px) {
    position: absolute;
    display: inline-block;
  }
`;

const MenuBar = styled.div`
  width: 35px;
  height: 4px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
  ${props =>
    props.short &&
    css`
      width: 30px;
    `}
  ${props =>
    props.leftRotate &&
    css`
      -webkit-transform: rotate(45deg) translate(0, 14px);
    `}
    ${props =>
    props.rightRotate &&
    css`
      -webkit-transform: rotate(-45deg) translate(0, -14px);
    `}
    ${props =>
    props.fadeOut &&
    css`
      opacity: 0;
    `}
`;

function Header() {
  const [menu, setMenu] = useRecoilState(menuAtom);
  return (
    <>
      <FixedHeader>
        <MyLink fontSize="1.8rem" to="/" navigation={false}>
          FRIDAY
        </MyLink>
        <ul style={{ margin: 0, display: 'inline', position: 'absolute', right: '5rem' }}>
          <VerticalLine>
            <MyLink navFontSize="1.3rem" to="/">
              HOME
            </MyLink>
          </VerticalLine>
          <VerticalLine>
            <MyLink navFontSize="1.3rem" to="/project">
              PROJECT
            </MyLink>
          </VerticalLine>
          <VerticalLine>
            <MyLink navFontSize="1.3rem" to="/recruit">
              RECRUIT
            </MyLink>
          </VerticalLine>
          <VerticalLine>
            <MyLink navFontSize="1.3rem" to="/contact">
              CONTACT
            </MyLink>
          </VerticalLine>
          <MenuIcon
            onClick={() => {
              menu ? setMenu(0) : setMenu(1);
            }}
          >
            {menu ? (
              <>
                <MenuBar />
                <MenuBar short />
                <MenuBar />
              </>
            ) : (
              <>
                <MenuBar leftRotate />
                <MenuBar fadeOut />
                <MenuBar rightRotate />
              </>
            )}
          </MenuIcon>
        </ul>
      </FixedHeader>
      {!menu && <ModalMenu />}
    </>
  );
}

export default Header;
