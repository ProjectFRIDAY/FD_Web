import React from 'react';
import styled from 'styled-components';
import Video from '../../assets/videos/tunnel.mp4';

const FullVideos = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const VideoFilter = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
`;

const VideoItem = styled.video`
  position: absolute;
  height: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: -1;
`;

export default function MainVideo({ children }) {
  return (
    <FullVideos>
      {children}
      <VideoFilter />
      <VideoItem autoPlay loop muted>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoItem>
    </FullVideos>
  );
}
