import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClock, faPenNib } from '@fortawesome/free-solid-svg-icons';
import Router from 'next/router';

const BlogItemLayout = styled.div`
  width: 90vw;
  border-radius: 1.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 1.5rem 1.5rem 2rem 1.5rem;
  display: grid;
  grid-template-columns: 4.5rem auto;
  grid-template-rows: 1fr 1fr 1.2fr;
  gap: 0px 20px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.35);
    width: 93vw;
  }
`;

const ThumbnailArea = styled.div`
  font-family: 'TossFace', 'SegoeUISymbol', sans-serif;
  font-size: 4rem;
  line-height: 1.2;
  grid-row-start: 1;
  grid-row-end: 3;
`;

const TitleArea = styled.div`
  font-family: 'SegoeUISymbol', sans-serif;
  font-size: min(1.5rem, 5vw);
  font-weight: bold;
  line-height: min(calc(1.5rem + 10px), 5.5vw);
  align-self: center;
`;

const TagArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  font-family: SegoeUISymbol;
  font-size: 15px;
  border-radius: 5px;
  padding-right: 10px;
  font-weight: 600;
  text-shadow: #01baae 0 0 10px;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

const InfoArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 20px;
  align-self: end;
  font-family: 'SegoeUISymbol', sans-serif;
  font-size: 15px;
  color: #cccccc;
`;

const Info = styled.span`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-direction: row;
  line-height: 1;
`;

export default function BlogItem({ blogItem }) {
  let authorData = null;

  if (blogItem.author) {
    authorData = blogItem.author;
    if (blogItem.email) {
      authorData += `(${blogItem.email})`;
    }
  }

  return (
    <BlogItemLayout
      onClick={() => {
        if (blogItem.id) {
          Router.push({
            pathname: `/post/${blogItem.id}`,
          });
        }
      }}
    >
      <ThumbnailArea>{blogItem.icon ?? '🖤'}</ThumbnailArea>
      <TitleArea>{blogItem.title ?? ''}</TitleArea>
      <TagArea>
        {blogItem.tags.map((item, index) => (
          <Tag key={index}>#{item ?? ''}</Tag>
        ))}
      </TagArea>
      <div></div>
      <InfoArea>
        <Info>
          <FontAwesomeIcon icon={faUser} />
          {authorData ?? ''}
        </Info>
        <Info>
          <FontAwesomeIcon icon={faClock} />
          {dateToText(blogItem.createdAt) ?? ''}
        </Info>
        <Info>
          <FontAwesomeIcon icon={faPenNib} />
          {dateToText(blogItem.EditedAt) ?? ''}
        </Info>
      </InfoArea>
    </BlogItemLayout>
  );
}

function dateToText(date) {
  if (!date) return null;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
}
