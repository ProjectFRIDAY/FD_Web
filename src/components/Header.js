import React from 'react';
import styled, { css } from 'styled-components';
import { menuAtom } from '../recoil/atom';
import { useRecoilState } from 'recoil';
import { throttle } from 'lodash';
import ModalMenu from './main/ModalMenu';
import MyLink from '../components/MyLink';
import PageMenuList from './PageMenuList';
import { motion } from 'framer-motion';

const MINIMUM_SCROLL = 10;

const FixedHeader = styled(motion.div)`
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 2rem;
  font-weight: bold;
  position: fixed;
  top: 0;
  z-index: 3;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(1rem);
  backdrop-filter: blur(1rem);
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  @media only screen and (max-width: 800px) {
    display: inline-block;
  }
`;

const MenuBar = styled.div`
  width: 30px;
  height: 3px;
  background-color: white;
  margin: 5px 0;
  transition: 0.4s;
  ${props =>
    props.short &&
    css`
      width: 30px;
    `}
  ${props =>
    props.leftRotate &&
    css`
      -webkit-transform: rotate(45deg) translate(0, 12px);
    `}
    ${props =>
    props.rightRotate &&
    css`
      -webkit-transform: rotate(-45deg) translate(0, -12px);
    `}
    ${props =>
    props.fadeOut &&
    css`
      opacity: 0;
    `}
`;

const PageListContainer = styled.div`
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

function Header() {
  const [menu, setMenu] = useRecoilState(menuAtom);
  const [isScrollTop, setIsScrollTop] = React.useState(true);

  // 스크롤 방향에 따라 헤더 숨기기
  React.useEffect(() => {
    const onScroll = throttle(() => setIsScrollTop(window.pageYOffset < MINIMUM_SCROLL), 50);
    window.addEventListener('scroll', onScroll);
  }, []);
  // end 스크롤 방향에 따라 헤더 숨기기

  // 애니메이션 설정
  const animationName = isScrollTop && menu ? 'hide' : 'show';
  const headerAnimationVarients = {
    open: { height: '4rem', opacity: 1 },
    hide: { height: '0', opacity: 0 },
  };
  // end 애니메이션 설정

  return (
    <>
      <FixedHeader animate={animationName} variants={headerAnimationVarients}>
        <MyLink fontSize="1.8rem" to="/">
          FRIDAY
        </MyLink>
        <PageListContainer>
          <PageMenuList />
        </PageListContainer>
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
      </FixedHeader>
      <ModalMenu isVisible={!menu} />
    </>
  );
}

export default Header;
