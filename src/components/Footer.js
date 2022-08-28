import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const GradientFooter = styled.div`
  width: 100%;
  height: 22rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to bottom, rgba(0, 123, 115, 0), #007b73);
`;

const SocialContainer = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  margin: 0 2rem;
`;

const TextContainer = styled.div`
  font-weight: bold;
  font-size: 2rem;
  margin: 0 2rem;
`;

const MyAnchor = styled.a`
  margin-right: 1.5rem;
`;

const CopyRight = styled.div`
  width: 100%;
  height: 2rem;
  text-align: center;
  color: #ccc;
  font-size: 1.3rem;
`;

export default function Footer() {
  return (
    <>
      <GradientFooter>
        <TextContainer>FRIDAY</TextContainer>
        <SocialContainer>
          <MyAnchor href="https://github.com/ProjectFRIDAY" target="_blank" className="github social">
            <FontAwesomeIcon icon={faGithub} size="3x" color="white" />
          </MyAnchor>
          <MyAnchor
            href="https://www.instagram.com/accounts/login/?next=/fri__.day/"
            target="_blank"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="3x" color="white" />
          </MyAnchor>
        </SocialContainer>
      </GradientFooter>
      <CopyRight>Copyright © Friday All Rights Reserved.</CopyRight>
    </>
  );
}
