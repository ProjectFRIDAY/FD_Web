import React from 'react';
import styled, { css } from 'styled-components';
import { menuAtom } from '../src/recoil/atom';
import { useSetRecoilState } from 'recoil';
import AnimatedPage from '../src/components/template/AnimatedPage';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Contacts from '../src/data/static/Contacts';

const GradientBackground = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 3rem;
  padding-right: 3rem;
  background-image: linear-gradient(148deg, #053a36 0%, #000 28%);
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  padding: 0rem;
  flex-wrap: wrap;
  gap: 3rem 5rem;
`;

const ContactBox = styled(motion.a)`
  width: 16rem;
  height: 13rem;
  background-color: white;
  color: black;
  position: relative;
  border-radius: 1rem;
  text-decoration: none;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const ContactTo = styled.div`
  ${props => {
    const BACKGROUND_COLOR = props.backgroundColor;
    return css`
      background: ${BACKGROUND_COLOR};
    `;
  }}
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70%;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const IconContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  margin: 1rem;
`;

const LinkName = styled.span`
  @media only screen and (max-width: 1000px) {
    font-size: 15px;
  }
  font-size: 20px;
`;

const Welcome = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 25rem 0 20rem 0;
  line-height: 1.5;
`;

const StyledH1 = styled.h1`
  margin: 10rem 0;
  font-weight: normal;
  font-size: 10vw;

  @media only screen and (min-width: 1000px) {
    margin-top: 13rem;
  }
`;

function AnimatedContactBox({ children, ...props }) {
  return (
    <ContactBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} {...props}>
      {children}
    </ContactBox>
  );
}

function Contact() {
  const setMenu = useSetRecoilState(menuAtom);

  return (
    <AnimatedPage>
      {setMenu(1)}
      <GradientBackground>
        <Layout>
          <StyledH1 className="title">Contact</StyledH1>
          <ContactLayout>
            {Contacts.map((contact, index) => (
              <AnimatedContactBox href={contact.href} target="_blank" key={index}>
                <Title>
                  <IconContainer>
                    <Image fill src={contact.icon} placeholder="blur" alt="연락처 아이콘" />
                  </IconContainer>
                  <p>{contact.title}</p>
                </Title>
                <ContactTo backgroundColor={contact.color}>
                  <LinkName>{contact.linkName}</LinkName>
                </ContactTo>
              </AnimatedContactBox>
            ))}
          </ContactLayout>
        </Layout>
        <Welcome>🌟 여러분의 문의를 환영합니다. 🌟</Welcome>
      </GradientBackground>
    </AnimatedPage>
  );
}

export default Contact;
