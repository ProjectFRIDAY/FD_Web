import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import ModalMenu from './main/ModalMenu';

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

const MyLink = styled(Link)`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  :hover {
    color: white;
  }
  ${props =>
    props.navigation &&
    css`
      font-size: 1rem;
      :hover {
        color: ${darken(0.2, 'white')};
      }
      @media only screen and (max-width: 700px) {
        display: none;
      }
    `}
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
        <MyLink to="/">FRIDAY</MyLink>
        <ul style={{ margin: 0, display: 'inline', position: 'absolute', right: '6rem' }}>
          <VerticalLine>
            <MyLink to="/" navigation>
              HOME
            </MyLink>
          </VerticalLine>
          <VerticalLine>
            <MyLink to="/project" navigation>
              PROJECT
            </MyLink>
          </VerticalLine>
          <VerticalLine>
            <MyLink to="/recruit" navigation>
              RECRUIT
            </MyLink>
          </VerticalLine>
          <VerticalLine>
            <MyLink to="/contact" navigation>
              CONTACT
            </MyLink>
          </VerticalLine>
          <MenuIcon
            onClick={() => {
              menu ? setMenu(0) : setMenu(1);
              console.log(menu);
            }}
          >
            {menu ? <MenuBar /> : <div>x</div>}
            <ModalMenu />
          </MenuIcon>
        </ul>
      </FixedHeader>
      {menu ? <ModalMenu /> : null}
    </>
  );
}

export default Header;
