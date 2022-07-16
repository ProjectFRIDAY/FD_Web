import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ModalMenu from './main/ModalMenu';
import MyLink from './main/MyLink';

const FixedHeader = styled.div`
  width: 100%;
  height: 4rem;
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
  maring: 0;
  display: none;
  cursor: pointer;
  @media only screen and (max-width: 700px) {
    position: absolute;
    display: inline-block;
  }
`;

const MenuBar = styled.div`
  ${props => {
    const SHORT = props.short;
    const ROTATE_ANGLE = props.rotateAngle;
    const FADE_OUT = props.fadeOut;
    return css`
      ${SHORT &&
      css`
        width: 30px;
      `}
      -webkit-transform: rotate(${ROTATE_ANGLE});
      ${FADE_OUT &&
      css`
        opacity: 0;
      `}
    `;
  }}
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

// const DropDownContainer = styled.div`
//   float: left;
//   overflow: hidden;
//   @media only screen and (max-width: 700px) {
//     position: absolute;
//     display: inline-block;
//   }
// `;

// const DropDownContent = styled.div`
//   display: block;
//   position: absolute;
//   backgroud-color: 'white';
//   min-width: 160px;
//   z-index: 4;
// `;

function Header() {
  const [menu, setMenu] = useState(1);
  return (
    <>
      <FixedHeader>
        <MyLink to="/" navigation={false}>
          FRIDAY
        </MyLink>
        <ul style={{ margin: 0, display: 'inline', position: 'absolute', right: '6rem' }}>
          <VerticalLine>
            <MyLink to="/" navigation>
              HOME
            </MyLink>
          </VerticalLine>
          <VerticalLine>
            <MyLink to="/project">PROJECT</MyLink>
          </VerticalLine>
          <VerticalLine>
            <MyLink to="/recruit">RECRUIT</MyLink>
          </VerticalLine>
          <VerticalLine>
            <MyLink to="/contact">CONTACT</MyLink>
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
      {!menu ? (
        <ModalMenu>
          <ul>
            <li>
              <MyLink to="/">HOME</MyLink>
            </li>
            <li>PROJECT</li>
            <li>RECRUIT</li>
            <li>CONTACT</li>
          </ul>
        </ModalMenu>
      ) : null}
    </>
  );
}

export default Header;
