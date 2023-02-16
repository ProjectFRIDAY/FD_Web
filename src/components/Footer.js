import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const GradientFooter = styled.div`
  width: 100%;
  height: 15rem;
  padding: 3rem 3rem 2rem 3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to bottom, rgba(0, 123, 115, 0), #007b73);
`;

const SocialContainer = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const TextContainer = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

const CopyRight = styled.div`
  width: 100%;
  text-align: center;
  color: #ccc;
  font-size: 1rem;
`;

export default function Footer() {
  return (
    <>
      <GradientFooter>
        <TextContainer>FRIDAY</TextContainer>
        <SocialContainer>
          <a href="https://github.com/ProjectFRIDAY" target="_blank" className="github social">
            <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
          </a>
          <a
            href="https://www.instagram.com/fridayproj_/"
            target="_blank"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
          </a>
        </SocialContainer>
        <CopyRight>Copyright © Friday. All Rights Reserved.</CopyRight>
      </GradientFooter>
    </>
  );
}
