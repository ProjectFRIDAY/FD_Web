import React from 'react';
import styled, { css } from 'styled-components';
import { menuAtom } from '../recoil/atom';
import { useSetRecoilState } from 'recoil';
import mailIcon from '../assets/images/icons/gmail.png';
import kakaoIcon from '../assets/images/icons/kakao.png';
import instagramIcon from '../assets/images/icons/instagram.png';

const GradientBackground = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 3rem;
  padding-right: 3rem;
  background-image: linear-gradient(148deg, #053a36 0%, #000 28%);
`;

const Spacer = styled.div`
  height: 11.5rem;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const ContactLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0rem;
  padding: 0rem;
`;

const ContactBox = styled.a`
  width: 16rem;
  height: 13rem;
  margin: 5rem;
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
  height: 3rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  text-align: center;
  padding-top: 0.6rem;
  font-weight: bold;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: 1rem;
`;

function Contact() {
  const setMenu = useSetRecoilState(menuAtom);
  return (
    <div className="page">
      {setMenu(1)}
      <GradientBackground>
        <Layout>
          <h1 style={{ fontSize: '8rem' }} className="title">
            Contact
          </h1>
          <Spacer />
          <ContactLayout>
            <ContactBox href="mailto:fridayproj2@gmail.com" target="_blank">
              <Title>
                <Icon src={mailIcon} />
                <p>메일</p>
              </Title>
              <p style={{ textAlign: 'center' }}>fridayproj2@gmail</p>
              <ContactTo backgroundColor="#01baae">메일로 문의하기</ContactTo>
            </ContactBox>

            <ContactBox href="" target="_blank">
              <Title>
                <Icon src={kakaoIcon} />
                <p>카카오톡</p>
              </Title>
              <p style={{ textAlign: 'center' }}>@</p>
              <ContactTo backgroundColor="#f9e000">카카오톡으로 문의하기</ContactTo>
            </ContactBox>

            <ContactBox href="https://www.instagram.com/accounts/login/?next=/fri__.day/" target="_blank">
              <Title>
                <Icon src={instagramIcon} />
                <p>인스타그램</p>
              </Title>
              <p style={{ textAlign: 'center' }}>@fri__.day</p>
              <ContactTo backgroundColor="radial-gradient(circle farthest-corner at 32% 106%,#ffe17d 0%,#ffcd69 10%,#fa9137 28%,#eb4141 42%,transparent 82%) , linear-gradient(135deg,#234bd7 12%,#c33cbe 58%);">
                인스타그램으로 문의하기
              </ContactTo>
            </ContactBox>
          </ContactLayout>
          <Spacer />
        </Layout>
      </GradientBackground>
    </div>
  );
}

export default Contact;
