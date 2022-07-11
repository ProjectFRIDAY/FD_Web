import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

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
    `}
`;

function Header() {
  // const [navigation, setNavigation] = useState(0);
  // 각 url에 접속했을 때 헤더의 해당하는 네비게이션에 밑줄을 긋기 위한 state.

  return (
    <FixedHeader>
      <MyLink to="/">FRIDAY</MyLink>
      <ul style={{ display: 'inline', position: 'absolute', right: '6rem' }}>
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
      </ul>
    </FixedHeader>
  );
}

export default Header;
