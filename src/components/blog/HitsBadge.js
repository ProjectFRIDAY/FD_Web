import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const HitsBadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 3rem;
`;

export default function HitsBadge({ url }) {
  const imageUrl = getUrl(url);

  return (
    <HitsBadgeContainer>
      <Image src={imageUrl} placeholder="blur"/>
    </HitsBadgeContainer>
  );
}

function getUrl(targetUrl) {
  const encodedUrl = encodeURIComponent(targetUrl);
  return `https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=${encodedUrl}&count_bg=%2301B9AD&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=%EB%B0%A9%EB%AC%B8%EC%9E%90+%EC%88%98&edge_flat=false`;
}
