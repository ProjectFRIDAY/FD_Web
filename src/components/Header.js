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
  width: 35px;
  height: 4px;
  background-color: white;
  margin: 6px 0;
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
            {menu ? <MenuBar /> : <div>x</div>}
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
