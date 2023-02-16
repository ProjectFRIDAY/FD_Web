import React from 'react';
import styled from 'styled-components';
import MyLink from './MyLink';

const MenuContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const VerticalLine = styled.span`
  display: inline-block;
  margin-left: 3rem;
`;

const PageMenuList = ({fontSize = "1.3rem"}) => {
  return (
    <MenuContainer>
      <VerticalLine>
        <MyLink navFontSize={fontSize} to="/">
          HOME
        </MyLink>
      </VerticalLine>
      <VerticalLine>
        <MyLink navFontSize={fontSize} to="/project">
          PROJECT
        </MyLink>
      </VerticalLine>
      <VerticalLine>
        <MyLink navFontSize={fontSize} to="/recruit">
          RECRUIT
        </MyLink>
      </VerticalLine>
      <VerticalLine>
        <MyLink navFontSize={fontSize} to="/contact">
          CONTACT
        </MyLink>
      </VerticalLine>
    </MenuContainer>
  );
};

export default PageMenuList;
