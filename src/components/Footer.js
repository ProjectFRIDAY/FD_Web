import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import PageMenuList from './PageMenuList';
import Link from 'next/link';

const GradientFooter = styled.div`
  width: 100%;
  padding: 3rem 3rem 2rem 3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to bottom, rgba(0, 123, 115, 0), #007b73);
  gap: 1rem;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem 3rem;
  flex-wrap: wrap;
`;

const SocialContainer = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const TextContainer = styled.div`
  display: inline;
  font-weight: bold;
  font-size: 2rem;
`;

const CopyRight = styled.div`
  width: 100%;
  text-align: center;
  color: #ccc;
  font-size: 1rem;
  margin-top: 2rem;
`;

const PageListContainer = styled.div`
  display: inline;
`;

export default function Footer() {
  return (
    <GradientFooter>
      <TitleContainer>
        <TextContainer>FRIDAY</TextContainer>
        <PageListContainer>
          <PageMenuList fontSize="1rem" />
        </PageListContainer>
      </TitleContainer>
      <SocialContainer>
        <Link href="https://github.com/ProjectFRIDAY" target="_blank" className="github social">
          <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
        </Link>
        <Link href="https://www.instagram.com/fridayproj_/" target="_blank" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
        </Link>
      </SocialContainer>
      <CopyRight>Copyright © Friday. All Rights Reserved.</CopyRight>
    </GradientFooter>
  );
}
