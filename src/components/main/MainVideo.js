import React from 'react';
import styled from 'styled-components';
import Video from '../../assets/videos/tunnel.mp4';

const FullVideos = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  padding-bottom: 10rem;
  background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 21, 20, 1) 90%, #036660 100%);
`;

export default function MainVideo({ children }) {
  return (
    <FullVideos>
      {children}
      <video width="100%" height="auto" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </FullVideos>
  );
}
