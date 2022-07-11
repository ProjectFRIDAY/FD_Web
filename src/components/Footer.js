import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const GradientFooter = styled.div`
  width: 100%;
  height: 22rem;
  padding: 1rem;
  background: linear-gradient(to bottom, rgba(0, 123, 115, 0), #007b73);
`;

const SocialContainer = styled.div`
  position: absolute;
  right: 0;
  padding: 3rem;
  padding-top: 9rem;
  display: inline-flex;
  justify-content: flex-end;
`;

const Container = styled.div`
  display: inline;
  position: absolute;
  padding: 3rem;
  padding-top: 9rem;
  font-weight: bold;
  font-size: 2rem;
`;

const MyAnchor = styled.a`
  margin-right: 1.5rem;
`;

const BottomFooter = styled.div`
  width: 100%;
  height: 1rem;
  text-align: center;
  color: #ccc;
  font-size: 0.5rem;
`;

export default function Footer() {
  return (
    <>
      <GradientFooter>
        <Container>FRIDAY</Container>
        <SocialContainer>
          <MyAnchor href="" className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="3x" color="white" />
          </MyAnchor>
          <MyAnchor href="https://github.com/ProjectFRIDAY" className="github social">
            <FontAwesomeIcon icon={faGithub} size="3x" color="white" />
          </MyAnchor>
          <MyAnchor href="https://www.instagram.com/accounts/login/?next=/fri__.day/" className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="3x" color="white" />
          </MyAnchor>
        </SocialContainer>
      </GradientFooter>
      <BottomFooter>Copyright © Friday All Rights Reserved.</BottomFooter>
    </>
  );
}
