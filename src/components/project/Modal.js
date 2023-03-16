import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faLink } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

import aosImage from '../../../public/assets/images/aos.png';
import iosImage from '../../../public/assets/images/ios.png';

const ModalStyle = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(3rem);
  backdrop-filter: blur(3rem);
  width: 60vw;
  height: auto;
  position: fixed;
  border-radius: 1rem;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  left: 20vw;
  top: 50vh;
  padding: 40px;
  color: black;
  z-index: 100;
  transform: translateY(-50%);

  @media only screen and (max-width: 1000px) {
    width: 80vw;
    left: 10vw;
    padding: 25px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 10px;
  width: 200px;
  height: 200px;
  margin-right: 50px;
  overflow: hidden;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const Title = styled.span`
  @media only screen and (max-width: 1000px) {
    font-size: 25px;
  }
  font-size: 40px;
  font-weight: 800;
  line-height: 3rem;
  margin-right: 10px;
`;

const Text = styled.div`
  margin-top: 20px;
  font-size: 25px;
  a:visited {
    color: blue;
  }

  @media only screen and (max-width: 1000px) {
    margin-top: 0px;
    font-size: 15px;
  }
`;

const LinkComp = styled(Link)`
  font-size: 25px;
  font-weight: 800px;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: blue;
  }
`;

const Desc = styled.div`
  @media only screen and (max-width: 1000px) {
    font-size: 15px;
    margin-top: 15px;
    line-height: 20px;
  }
  font-size: 20px;
  margin: 40px 0;
  line-height: 30px;
  white-space: pre-line;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  overflow: hidden;
  flex-wrap: wrap;
`;

const TagContainer = styled.div`
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const ExitIcon = styled(FontAwesomeIcon)`
  margin: 10px;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  @media only screen and (max-width: 1000px) {
    margin: 0;
  }
`;

const DownloadImageContainer = styled.div`
  position: relative;
  width: 10rem;
  height: 3rem;
  overflow: hidden;
`;

const DownloadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

function Modal({ content, visible, setVisible, ...rest }) {
  const closeModal = () => {
    setVisible(false);
  };

  const animationParams = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: 'easeOut' },
  };

  return (
    <AnimatePresence>
      {visible && (
        <ModalStyle {...animationParams} {...rest}>
          <ExitIcon onClick={closeModal} icon={faXmark} className="icon" />
          <Wrapper>
            <ImageContainer>
              <Image fill src={content.img} placeholder="blur" alt="프로젝트 이미지" />
            </ImageContainer>

            <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
              <TitleContainer>
                <Title>{content.title}</Title>
                {content.git ? (
                  <LinkComp href={content.git} target="_blank">
                    <FontAwesomeIcon icon={faGithub} color="black" />
                  </LinkComp>
                ) : (
                  ''
                )}
                {content.site ? (
                  <LinkComp style={{ marginTop: 0 }} href={content.site} target="_blank">
                    <FontAwesomeIcon icon={faLink} color="black" />
                  </LinkComp>
                ) : (
                  ''
                )}
              </TitleContainer>
              <TagContainer>
                <Text>{content.team}</Text>
                <Text>{content.tags}</Text>
              </TagContainer>
            </div>
          </Wrapper>
          <Desc dangerouslySetInnerHTML={{ __html: content.desc }}></Desc>
          <DownloadContainer>
            {content.aos ? (
              <LinkComp href={content.aos} target="_blank">
                <DownloadImageContainer>
                  <Image fill src={aosImage} placeholder="blur" alt="AOS 다운로드" />
                </DownloadImageContainer>
              </LinkComp>
            ) : (
              ''
            )}
            {content.ios ? (
              <LinkComp href={content.ios} target="_blank">
                <DownloadImageContainer>
                  <Image fill src={iosImage} placeholder="blur" alt="IOS 다운로드" />
                </DownloadImageContainer>
              </LinkComp>
            ) : (
              ''
            )}
          </DownloadContainer>
        </ModalStyle>
      )}
    </AnimatePresence>
  );
}

export default Modal;
