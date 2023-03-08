import React from 'react';
import BlogItem from './BlogItem';
import styled from 'styled-components';

const BlogListLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7vw 0px;
  min-height: 100vh;
  gap: 30px 0px;
`;

export default function BlogList({ blogItems }) {
  return (
    <BlogListLayout>
      {blogItems.map(item => (
        <BlogItem blogItem={item} />
      ))}
    </BlogListLayout>
  );
}
