import React from 'react';
import styled from 'styled-components';
import { menuAtom } from '../recoil/atom/menuAtom';
import { useSetRecoilState } from 'recoil';
import Button from '../components/main/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const GradientBackground = styled.div`
  width: 100%;
  height: 1000px;
  padding-left: 3rem;
  padding-right: 3rem;
  background-image: linear-gradient(148deg, #053a36 0%, #000 28%);
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const ContactLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0rem;
  padding: 0rem;
`;

const ContactBox = styled.div`
  width: 10rem;
  height: 13rem;
  margin: 5rem;
  background-color: #ccc;
  color: black;
  display: flex;
  justify-content: space-around;
  border-radius: 1rem;
`;

function Contact() {
  const setMenu = useSetRecoilState(menuAtom);
  return (
    <div className="page">
      {setMenu(1)}
      <GradientBackground>
        <Layout>
          <h1 style={{ fontSize: '8vw' }}>Contact</h1>
          <h2>📩 fridayproj2@gmail.com</h2>
          <ContactLayout>
            <ContactBox>
              <Button
                href="https://www.facebook.com/day.fri.3367"
                target="_blank"
                className="facebook social"
              >
                <FontAwesomeIcon icon={faFacebook} size="8x"/>
                <h3>@ProjectFRIDAY</h3>
              </Button>
            </ContactBox>
            <ContactBox>
              <Button
                href="https://github.com/ProjectFRIDAY"
                target="_blank"
                className="github social"
              >
                <FontAwesomeIcon icon={faGithub} size="8x"/>
                <h3>@FRIDAY</h3>
              </Button>
            </ContactBox>
            <ContactBox>
              <Button
                href="https://www.instagram.com/accounts/login/?next=/fri__.day/"
                target="_blank"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="8x"/>
                <h3>Friday&#40;@fri_.day&#41;</h3>
              </Button>
            </ContactBox>
          </ContactLayout>
        </Layout>
      </GradientBackground>
    </div>
  );
}

export default Contact;
