import React from 'react';
import styled, { css } from 'styled-components';
import { menuAtom } from '../src/recoil/atom';
import { useSetRecoilState } from 'recoil';
import AnimatedPage from '../src/components/template/AnimatedPage';

const mailIcon = "/assets/images/icons/gmail.png";
const kakaoIcon = "/assets/images/icons/kakao.png";
const instagramIcon = "/assets/images/icons/instagram.png";

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
  margin: 0rem;
  padding: 0rem;
  flex-wrap: wrap;
  gap: 3rem 5rem;
`;

const ContactBox = styled.a`
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

const Icon = styled.img`
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

function Contact() {
  const setMenu = useSetRecoilState(menuAtom);

  return (
    <AnimatedPage>
      {setMenu(1)}
      <GradientBackground>
        <Layout>
          <StyledH1 className="title">Contact</StyledH1>
          <ContactLayout>
            <ContactBox href="mailto:fridayproj2@gmail.com" target="_blank">
              <Title>
                <Icon src={mailIcon} />
                <p>메일</p>
              </Title>
              <ContactTo backgroundColor="#01baae">
                <LinkName>fridayproj2@gmail.com</LinkName>
              </ContactTo>
            </ContactBox>

            <ContactBox href="https://open.kakao.com/o/sytyCGxe" target="_blank">
              <Title>
                <Icon src={kakaoIcon} />
                <p>카카오톡</p>
              </Title>
              <ContactTo backgroundColor="#f9e000">
                <LinkName>@fridayproj</LinkName>
              </ContactTo>
            </ContactBox>

            <ContactBox href="https://www.instagram.com/fridayproj_/" target="_blank">
              <Title>
                <Icon src={instagramIcon} />
                <p>인스타그램</p>
              </Title>
              <ContactTo
                backgroundColor="
                radial-gradient(circle farthest-corner at 32% 106%,#ffe17d 0%,#ffcd69 10%,#fa9137 28%,#eb4141 42%,transparent 82%) , 
                linear-gradient(135deg,#234bd7 12%,#c33cbe 58%);"
              >
                <LinkName>@fridayproj_</LinkName>
              </ContactTo>
            </ContactBox>
          </ContactLayout>
        </Layout>
        <Welcome>🌟 여러분의 문의를 환영합니다. 🌟</Welcome>
      </GradientBackground>
    </AnimatedPage>
  );
}

export default Contact;
