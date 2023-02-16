import React from 'react';
import styled, { css } from 'styled-components';
import { menuAtom } from '../recoil/atom';
import { useRecoilState } from 'recoil';
import { throttle } from 'lodash';
import ModalMenu from './main/ModalMenu';
import MyLink from '../components/MyLink';
import PageMenuList from './PageMenuList';
import { motion } from 'framer-motion';

const FixedHeader = styled(motion.div)`
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 2rem;
  background-color: #011918;
  font-weight: bold;
  position: fixed;
  top: 0;
  z-index: 3;
  justify-content: space-between;
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

function Header() {
  const [menu, setMenu] = useRecoilState(menuAtom);
  const [isScrollingDown, setIsScrollingDown] = React.useState(false);

  // 스크롤 방향에 따라 헤더 숨기기
  React.useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const updateScroiingDown = () => {
      const scrollY = window.pageYOffset;

      setIsScrollingDown(scrollY - lastScrollY >= 0);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = throttle(() => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroiingDown);
        ticking = true;
      }
    }, 300);

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  // end 스크롤 방향에 따라 헤더 숨기기

  // 애니메이션 설정
  const animationName = !isScrollingDown && menu ? 'hide' : 'show';
  const headerAnimationVarients = {
    open: { height: '4rem', opacity: 1 },
    hide: { height: '0', opacity: 0 },
  };
  // end 애니메이션 설정

  return (
    <>
      <FixedHeader animate={animationName} variants={headerAnimationVarients}>
        <MyLink fontSize="1.8rem" to="/" navigation={false}>
          FRIDAY
        </MyLink>
        <PageMenuList/>
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
