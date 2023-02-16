import React from 'react';
import styled from 'styled-components';
import MyLink from './MyLink';

const MenuContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0 3rem;
  flex-wrap: wrap;
`;

const VerticalLine = styled.span`
  display: inline-block;
`;

const PageMenuList = ({fontSize = "1.3rem"}) => {
  return (
    <MenuContainer>
      <VerticalLine>
        <MyLink fontSize={fontSize} to="/">
          HOME
        </MyLink>
      </VerticalLine>
      <VerticalLine>
        <MyLink fontSize={fontSize} to="/project">
          PROJECT
        </MyLink>
      </VerticalLine>
      <VerticalLine>
        <MyLink fontSize={fontSize} to="/recruit">
          RECRUIT
        </MyLink>
      </VerticalLine>
      <VerticalLine>
        <MyLink fontSize={fontSize} to="/contact">
          CONTACT
        </MyLink>
      </VerticalLine>
    </MenuContainer>
  );
};

export default PageMenuList;
